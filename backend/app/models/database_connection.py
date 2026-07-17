from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from app.core.database import Base


class DatabaseConnection(Base):
    __tablename__ = "database_connections"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    connection_name = Column(String(100), nullable=False)

    host = Column(String(255), nullable=False)

    port = Column(Integer, nullable=False)

    username = Column(String(100), nullable=False)

    password = Column(String(255), nullable=False)

    database_name = Column(String(100), nullable=False)

    is_active = Column(Boolean, default=False)

    user = relationship(
        "User",
        back_populates="connections",
    )