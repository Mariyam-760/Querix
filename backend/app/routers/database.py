from fastapi import APIRouter, HTTPException
from sqlalchemy import text

from app.core.database import engine

router = APIRouter(
    prefix="/api/database",
    tags=["Database"],
)


@router.get("/test")
def test_database_connection():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "success": True,
            "message": "Successfully connected to MySQL!"
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )