from pydantic import BaseModel


class ConnectionResponse(BaseModel):
    id: int
    connection_name: str
    host: str
    port: int
    username: str
    database_name: str
    is_active: bool

    class Config:
        from_attributes = True