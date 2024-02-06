from fastapi import FastAPI
from Api.v1.api import api

app = FastAPI()

app.include_router(api)


