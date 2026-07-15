from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.schema import router as schema_router

from app.routers.database import router as database_router
from app.routers.connections import router as connections_router
from app.core.database import Base, engine
from app.models.database_connection import DatabaseConnection
from app.models.user import User
from app.routers.auth import router as auth_router

app = FastAPI(
    title="Querix API",
    description="AI-Powered Natural Language to SQL Business Intelligence Platform",
    version="1.0.0",
)
# Create database tables
Base.metadata.create_all(bind=engine)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(database_router)
app.include_router(schema_router)
app.include_router(connections_router)
app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Querix API"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Querix Backend",
        "version": "1.0.0"
    }

