from sqlmodel import SQLModel, Field
from uuid import uuid4, UUID
from datetime import datetime


class BaseUUID(SQLModel):
    user_id: UUID = Field(primary_key=True, default_factory=uuid4)
    created_at: datetime = Field(default_factory=datetime.utcnow)
