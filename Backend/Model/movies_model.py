from .base_uuid_model import BaseUUID, Field
from sqlmodel import SQLModel

class MoviesBase(SQLModel):
    title: str = Field(unique=True, index=True)
    description: str
    release_year: int
    rating: float
    director: str
    genre: str


class Movies(BaseUUID, MoviesBase, table=True):
    pass

class MovieCreate(MoviesBase):
    pass
