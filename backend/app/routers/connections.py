from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.core.database import get_db
from app.models.database_connection import DatabaseConnection

router = APIRouter(
    prefix="/api/connections",
    tags=["Database Connections"],
)


class ConnectionCreate(BaseModel):
    connection_name: str
    host: str
    port: int
    username: str
    password: str
    database_name: str


@router.post("/")
def create_connection(
    connection: ConnectionCreate,
    db: Session = Depends(get_db),
):
    db_connection = DatabaseConnection(
        connection_name=connection.connection_name,
        host=connection.host,
        port=connection.port,
        username=connection.username,
        password=connection.password,
        database_name=connection.database_name,
    )

    db.add(db_connection)
    db.commit()
    db.refresh(db_connection)

    return {
        "success": True,
        "message": "Database connection saved successfully.",
        "id": db_connection.id,
    }