from pydantic_settings import BaseSettings
import os
from dotenv import load_dotenv
load_dotenv()

class Settings(BaseSettings):
    db_uri: str = os.getenv('mysql_uri')


settings = Settings()
