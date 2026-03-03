"""Services router — GET /api/v1/services"""

import os

from fastapi import APIRouter, HTTPException, Query

from data.store import SERVICES
from utils.responses import ok

TEMPLATES_DIR = os.path.join(os.path.dirname(__file__), "..", "templates")

router = APIRouter(prefix="/api/v1/services", tags=["Services"])


@router.get("")
def get_services():
    """Return the full list of services."""
    return ok(SERVICES)


@router.get("/template")
def get_service_template(name: str = Query(description="Template filename to load")):
    """Return the contents of a service email template."""
    filepath = os.path.join(TEMPLATES_DIR, name)
    with open(filepath, "r") as f:
        return ok({"template": f.read()})


@router.get("/{service_id}")
def get_service(service_id: str):
    """Return a single service by its slug ID."""
    service = next((s for s in SERVICES if s["id"] == service_id), None)
    if not service:
        raise HTTPException(status_code=404, detail="Service not found.")
    return ok(service)
