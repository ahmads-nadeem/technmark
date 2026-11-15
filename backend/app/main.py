from fastapi import FastAPI
from app.routes.gemini import gemini
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_ORIGIN],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(gemini.router)