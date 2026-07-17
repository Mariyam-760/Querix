from sqlalchemy import create_engine
from urllib.parse import quote_plus

from app.models.database_connection import DatabaseConnection


def get_active_engine(db, user_id: int):
    """
    Returns a SQLAlchemy engine connected to
    the currently active database of the logged-in user.
    """

    active_db = (
        db.query(DatabaseConnection)
        .filter(
            DatabaseConnection.user_id == user_id,
            DatabaseConnection.is_active == True,
        )
        .first()
    )

    if not active_db:
        return None

    database_url = (
        f"mysql+pymysql://"
        f"{active_db.username}:{quote_plus(active_db.password)}"
        f"@{active_db.host}:{active_db.port}"
        f"/{active_db.database_name}"
    )

    return create_engine(
        database_url,
        pool_pre_ping=True,
    )