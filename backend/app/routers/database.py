from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from urllib.parse import quote_plus

router = APIRouter(
    prefix="/api/database",
    tags=["Database"],
)


class TestConnectionRequest(BaseModel):
    host: str
    port: int
    username: str
    password: str
    database_name: str


@router.post("/test")
def test_database_connection(request: TestConnectionRequest):
    try:
        database_url = (
    f"mysql+pymysql://"
    f"{request.username}:{quote_plus(request.password)}"
    f"@{request.host}:{request.port}"
    f"/{request.database_name}"
)

        engine = create_engine(database_url)

        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "success": True,
            "message": "Connection Successful!"
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )