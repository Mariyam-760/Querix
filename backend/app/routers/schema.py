from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import inspect
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import get_current_user

from app.services.active_database import get_active_engine

router = APIRouter(
    prefix="/api/schema",
    tags=["Schema"],
)


# =====================================================
# Get All Tables
# =====================================================

@router.get("/tables")
def get_tables(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    engine = get_active_engine(
        db,
        current_user["user_id"],
    )

    if engine is None:
        raise HTTPException(
            status_code=404,
            detail="No active database connection found.",
        )

    inspector = inspect(engine)

    tables = inspector.get_table_names()

    return {
        "success": True,
        "database": engine.url.database,
        "count": len(tables),
        "tables": tables,
    }


# =====================================================
# Get Columns
# =====================================================

@router.get("/columns/{table_name}")
def get_columns(
    table_name: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    engine = get_active_engine(
        db,
        current_user["user_id"],
    )

    if engine is None:
        raise HTTPException(
            status_code=404,
            detail="No active database connection found.",
        )

    inspector = inspect(engine)

    if table_name not in inspector.get_table_names():
        raise HTTPException(
            status_code=404,
            detail=f"Table '{table_name}' not found.",
        )

    columns = inspector.get_columns(table_name)

    return {
        "success": True,
        "table": table_name,
        "columns": [
            {
                "name": column["name"],
                "type": str(column["type"]),
                "nullable": column["nullable"],
            }
            for column in columns
        ],
    }