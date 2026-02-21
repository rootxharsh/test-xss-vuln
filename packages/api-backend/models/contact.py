"""Pydantic models for the contact form."""

from pydantic import BaseModel, EmailStr, field_validator


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

    @field_validator("name", "subject", "message")
    @classmethod
    def not_blank(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Field must not be blank.")
        return v

    @field_validator("name")
    @classmethod
    def name_length(cls, v: str) -> str:
        if len(v) < 2 or len(v) > 100:
            raise ValueError("Name must be between 2 and 100 characters.")
        return v

    @field_validator("subject")
    @classmethod
    def subject_length(cls, v: str) -> str:
        if len(v) < 3 or len(v) > 200:
            raise ValueError("Subject must be between 3 and 200 characters.")
        return v

    @field_validator("message")
    @classmethod
    def message_length(cls, v: str) -> str:
        if len(v) < 10 or len(v) > 5000:
            raise ValueError("Message must be between 10 and 5000 characters.")
        return v


class ContactResponse(BaseModel):
    id: str
    submitted_at: str
