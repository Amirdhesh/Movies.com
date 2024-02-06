from Api.v1.endpoints import Users, Movies
from fastapi import APIRouter

api = APIRouter()

api.include_router(Users.router, prefix='/users', tags=['USERS'])
api.include_router(Movies.router, prefix='/movies', tags=['MOVIES'])
