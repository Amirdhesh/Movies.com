from .base_uuid_model import BaseUUID, Field, SQLModel

class UserBase(SQLModel):
    name : str = Field(unique=True, index=True)
    password: str
    email: str

class Users(UserBase,BaseUUID,table=True):
    pass

class UserCreate(UserBase):
    pass
