"""
Nexus Agency API — entry point.

Responsibilities:
- Create the FastAPI app
- Register CORS middleware
- Mount all routers
- Register global error handlers
"""

from datetime import datetime, timezone

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from routers import contact, projects, services, stats, team

# ── App ───────────────────────────────────────────────────────────────────────

app = FastAPI(
    title="Nexus Agency API",
    description="Backend API for the Nexus software agency website.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ── Middleware ────────────────────────────────────────────────────────────────

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Accept"],
)

# ── Routers ───────────────────────────────────────────────────────────────────

app.include_router(stats.router)
app.include_router(services.router)
app.include_router(projects.router)
app.include_router(team.router)
app.include_router(contact.router)

# ── Error handlers ────────────────────────────────────────────────────────────

@app.exception_handler(404)
async def not_found_handler(request: Request, exc: HTTPException):
    return JSONResponse(
        status_code=404,
        content={"success": False, "message": "Resource not found.", "data": None},
    )


@app.exception_handler(422)
async def validation_handler(request: Request, exc):
    errors = exc.errors() if hasattr(exc, "errors") else []
    messages = [
        f"{'.'.join(str(loc) for loc in e['loc'])}: {e['msg']}"
        for e in errors
    ]
    return JSONResponse(
        status_code=422,
        content={
            "success": False,
            "message": "Validation failed.",
            "errors": messages,
            "data": None,
        },
    )

# ── Meta routes ───────────────────────────────────────────────────────────────

@app.get("/", tags=["Meta"])
def root():
    """API entry point — returns version info and available endpoints."""
    return {
        "name": "Nexus Agency API",
        "version": "1.0.0",
        "docs": "/docs",
        "endpoints": [
            "GET  /health",
            "GET  /api/v1/stats",
            "GET  /api/v1/services",
            "GET  /api/v1/services/{id}",
            "GET  /api/v1/projects",
            "GET  /api/v1/projects/{id}",
            "GET  /api/v1/team",
            "GET  /api/v1/team/{id}",
            "POST /api/v1/contact",
        ],
    }


@app.get("/health", tags=["Meta"])
def health_check():
    """Health check — returns 200 if the service is up."""
    return {
        "status": "healthy",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
