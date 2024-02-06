from sqlmodel import create_engine, Session
from core.settings import settings


engine = create_engine(url=settings.db_uri)


def get_session():
    with Session(engine) as session:
        yield session
