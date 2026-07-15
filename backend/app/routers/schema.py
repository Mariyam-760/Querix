from fastapi import APIRouter, Depends
from sqlalchemy import inspect
from sqlalchemy.orm import Session

from app.core.database import get_db

router = APIRouter(
    prefix="/api/schema",
    tags=["Schema"],
)


@router.get("/tables")
def get_tables(db: Session = Depends(get_db)):
    inspector = inspect(db.bind)

    tables = inspector.get_table_names()

    return {
        "success": True,
        "count": len(tables),
        "tables": tables,
    }
@router.get("/columns/{table_name}")
def get_table_columns(
    table_name: str,
    db: Session = Depends(get_db)
):
    inspector = inspect(db.bind)

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