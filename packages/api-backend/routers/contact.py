"""Contact router — POST /api/v1/contact"""

import uuid
from datetime import datetime, timezone

from fastapi import APIRouter

from data.store import contact_submissions
from models.contact import ContactRequest
from utils.responses import ok

router = APIRouter(prefix="/api/v1/contact", tags=["Contact"])


@router.post("", status_code=201)
def submit_contact(payload: ContactRequest):
    """
    Accept a contact form submission and store it.

    In production, call an email service (SendGrid, SES, Resend, etc.)
    here instead of writing to the in-memory list.
    """
    submission = {
        "id": str(uuid.uuid4()),
        "name": payload.name,
        "email": payload.email,
        "subject": payload.subject,
        "message": payload.message,
        "submitted_at": datetime.now(timezone.utc).isoformat(),
    }
    contact_submissions.append(submission)

    return ok(
        {"id": submission["id"], "submitted_at": submission["submitted_at"]},
        message="Message received. We'll be in touch within 24 hours.",
    )
