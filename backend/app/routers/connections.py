from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.core.database import get_db
from app.core.security import get_current_user

from app.models.database_connection import DatabaseConnection
from app.schemas.connection import ConnectionResponse

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


# ======================================================
# Create Connection
# ======================================================

@router.post("/")
def create_connection(
    connection: ConnectionCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    db_connection = DatabaseConnection(
        user_id=current_user["user_id"],
        connection_name=connection.connection_name,
        host=connection.host,
        port=connection.port,
        username=connection.username,
        password=connection.password,
        database_name=connection.database_name,
        is_active=False,
    )

    db.add(db_connection)
    db.commit()
    db.refresh(db_connection)

    return {
        "success": True,
        "message": "Database connection saved successfully.",
        "id": db_connection.id,
    }


# ======================================================
# Get User Connections
# ======================================================

@router.get(
    "/",
    response_model=list[ConnectionResponse],
)
def get_connections(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    connections = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.user_id == current_user["user_id"]
        )
        .all()
    )

    return connections


# ======================================================
# Delete Connection
# ======================================================

@router.delete("/{connection_id}")
def delete_connection(
    connection_id: int,
    db: Session =Depends(get_db),
    current_user=Depends(get_current_user),
):
    connection = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.id == connection_id,
            DatabaseConnection.user_id == current_user["user_id"],
        )
        .first()
    )

    if not connection:
        raise HTTPException(
            status_code=404,
            detail="Connection not found.",
        )

    db.delete(connection)
    db.commit()

    return {
        "success": True,
        "message": "Connection deleted successfully.",
    }


# ======================================================
# Activate Connection
# ======================================================

@router.put("/activate/{connection_id}")
def activate_connection(
    connection_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    connection = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.id == connection_id,
            DatabaseConnection.user_id == current_user["user_id"],
        )
        .first()
    )

    if not connection:
        raise HTTPException(
            status_code=404,
            detail="Connection not found.",
        )

    (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.user_id == current_user["user_id"]
        )
        .update(
            {
                DatabaseConnection.is_active: False
            }
        )
    )

    connection.is_active = True

    db.commit()

    return {
        "success": True,
        "message": "Connection activated successfully.",
    }


# ======================================================
# Update Connection
# ======================================================

@router.put("/{connection_id}")
def update_connection(
    connection_id: int,
    updated_connection: ConnectionCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    connection = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.id == connection_id,
            DatabaseConnection.user_id == current_user["user_id"],
        )
        .first()
    )

    if not connection:
        raise HTTPException(
            status_code=404,
            detail="Connection not found.",
        )

    connection.connection_name = updated_connection.connection_name
    connection.host = updated_connection.host
    connection.port = updated_connection.port
    connection.username = updated_connection.username
    connection.password = updated_connection.password
    connection.database_name = updated_connection.database_name

    db.commit()
    db.refresh(connection)

    return {
        "success": True,
        "message": "Connection updated successfully.",
    }