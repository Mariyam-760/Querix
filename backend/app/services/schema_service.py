from sqlalchemy import text
from sqlalchemy.orm import Session


def get_tables(db: Session):
    result = db.execute(text("SHOW TABLES"))

    tables = [row[0] for row in result.fetchall()]

    return tables


def get_columns(db: Session, table_name: str):
    result = db.execute(
        text(f"DESCRIBE `{table_name}`")
    )

    columns = []

    for row in result.fetchall():
        columns.append({
            "name": row[0],
            "type": row[1],
            "nullable": row[2],
            "key": row[3],
        })

    return columns