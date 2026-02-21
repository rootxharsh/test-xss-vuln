"""Auth router — POST /api/v1/auth/signup  &  POST /api/v1/auth/login"""

import hashlib
import hmac
import os

from fastapi import APIRouter, HTTPException

from data.store import users
from models.auth import LoginRequest, SignupRequest
from utils.responses import ok

router = APIRouter(prefix="/api/v1/auth", tags=["Auth"])


def _hash_password(password: str, salt: str) -> str:
    """Return a salted SHA-256 hash of the password."""
    return hashlib.sha256(f"{salt}{password}".encode()).hexdigest()


@router.post("/signup", status_code=201)
def signup(payload: SignupRequest):
    """Register a new user. Password is salted and hashed before storage."""
    if any(u["username"] == payload.username for u in users):
        raise HTTPException(status_code=409, detail="Username already taken.")
    if any(u["email"] == payload.email for u in users):
        raise HTTPException(status_code=409, detail="Email already registered.")

    salt = os.urandom(16).hex()
    user = {
        "username": payload.username,
        "email": payload.email,
        "password_hash": _hash_password(payload.password, salt),
        "salt": salt,
        "role": "user",
    }
    users.append(user)

    return ok(
        {"username": user["username"], "email": user["email"]},
        message="Account created successfully.",
    )


@router.post("/login")
def login(payload: LoginRequest):
    """Authenticate a user by verifying their hashed password."""
    user = next((u for u in users if u["username"] == payload.username), None)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password.")

    expected = _hash_password(payload.password, user["salt"])
    if not hmac.compare_digest(expected, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid username or password.")

    return ok(
        {"username": user["username"], "email": user["email"], "role": user["role"]},
        message="Login successful.",
    )
