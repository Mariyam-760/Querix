from sqlalchemy import Column, Integer, String

from app.core.database import Base


class DatabaseConnection(Base):
    __tablename__ = "database_connections"

    id = Column(Integer, primary_key=True, index=True)

    connection_name = Column(String(100), nullable=False)

    host = Column(String(255), nullable=False)

    port = Column(Integer, nullable=False)

    username = Column(String(100), nullable=False)

    password = Column(String(255), nullable=False)

    database_name = Column(String(100), nullable=False)