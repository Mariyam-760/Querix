# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy import inspect
# from sqlalchemy.orm import Session
# from pydantic import BaseModel

# from app.core.database import get_db
# from app.core.security import get_current_user

# from app.services.active_database import get_active_engine

# from app.ai.gemini_service import generate_sql

# router = APIRouter(
#     prefix="/api/ai",
#     tags=["Artificial Intelligence"],
# )


# class AIRequest(BaseModel):
#     question: str


# @router.post("/generate-sql")
# def ai_generate_sql(
#     request: AIRequest,
#     db: Session = Depends(get_db),
#     current_user=Depends(get_current_user),
# ):

#     engine = get_active_engine(
#         db,
#         current_user["user_id"],
#     )

#     if engine is None:
#         raise HTTPException(
#             status_code=404,
#             detail="No active database."
#         )

#     inspector = inspect(engine)

#     schema = ""

#     for table in inspector.get_table_names():

#         schema += f"\nTable: {table}\n"

#         for column in inspector.get_columns(table):

#             schema += (
#                 f"- {column['name']} "
#                 f"({column['type']})\n"
#             )

#     prompt = f"""
# You are an expert SQL generator.

# Generate ONLY MySQL SQL.

# Do not explain anything.

# Database Schema:

# {schema}

# User Question:

# {request.question}
# """

#     sql = generate_sql(prompt)

#     return {
#         "success": True,
#         "sql": sql,
#     }


from fastapi import APIRouter
from pydantic import BaseModel

from app.ai.gemini_service import generate_content

router = APIRouter(
    prefix="/api/ai",
    tags=["Artificial Intelligence"],
)


class AIRequest(BaseModel):
    question: str


@router.post("/test")
def test_ai(request: AIRequest):
    response = generate_content(request.question)

    return {
        "success": True,
        "response": response,
    }