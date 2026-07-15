from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.core.database import get_db
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


# ----------------------------
# Create Connection
# ----------------------------
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


# ----------------------------
# Get All Connections
# ----------------------------
@router.get(
    "/",
    response_model=list[ConnectionResponse],
)
def get_connections(
    db: Session = Depends(get_db),
):
    connections = (
        db.query(DatabaseConnection)
        .all()
    )

    return connections


# ----------------------------
# Delete Connection
# ----------------------------
@router.delete("/{connection_id}")
def delete_connection(
    connection_id: int,
    db: Session = Depends(get_db),
):
    connection = (
        db.query(DatabaseConnection)
        .filter(DatabaseConnection.id == connection_id)
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

@router.put("/activate/{connection_id}")
def activate_connection(
    connection_id: int,
    db: Session = Depends(get_db),
):
    # Find selected connection
    connection = (
        db.query(DatabaseConnection)
        .filter(DatabaseConnection.id == connection_id)
        .first()
    )

    if not connection:
        raise HTTPException(
            status_code=404,
            detail="Connection not found.",
        )

    # Deactivate all connections
    db.query(DatabaseConnection).update(
        {
            DatabaseConnection.is_active: False
        }
    )

    # Activate selected connection
    connection.is_active = True

    db.commit()

    return {
        "success": True,
        "message": "Connection activated successfully.",
    }

@router.put("/{connection_id}")
def update_connection(
    connection_id: int,
    updated_connection: ConnectionCreate,
    db: Session = Depends(get_db),
):
    connection = (
        db.query(DatabaseConnection)
        .filter(DatabaseConnection.id == connection_id)
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