"""Team router — GET /api/v1/team"""

from fastapi import APIRouter, HTTPException

from data.store import TEAM
from utils.responses import ok

router = APIRouter(prefix="/api/v1/team", tags=["Team"])


@router.get("")
def get_team():
    """Return all team members."""
    return ok(TEAM)


@router.get("/{member_id}")
def get_member(member_id: str):
    """Return a single team member by their slug ID."""
    member = next((m for m in TEAM if m["id"] == member_id), None)
    if not member:
        raise HTTPException(status_code=404, detail="Team member not found.")
    return ok(member)
