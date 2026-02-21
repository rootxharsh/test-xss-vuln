"""Shared response helpers for consistent API envelopes."""


def ok(data, *, message: str = "OK") -> dict:
    """Wrap data in a standard success envelope."""
    return {"success": True, "message": message, "data": data}


def error(message: str, *, data=None) -> dict:
    """Wrap an error message in a standard error envelope."""
    return {"success": False, "message": message, "data": data}
