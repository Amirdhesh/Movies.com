from .base_uuid_model import BaseUUID, Field, SQLModel


class UserBase(SQLModel):
    name: str = Field(unique=True, index=True)
    password: str
    email: str


class Users(UserBase, BaseUUID, table=True):
    pass


class UserCreate(UserBase):
    pass


class UserLogin(SQLModel):
    name: str
    password: str


class UserLoginResponse(SQLModel):
    name: str
    email: str
    # user_id: str
