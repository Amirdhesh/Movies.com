from fastapi import APIRouter, Depends
from Model.movies_model import MovieCreate, Movies
from Db.config import get_session, Session, select
router = APIRouter()


@router.get('/movies/{genre}') #Fetch movies based on genre
def get_movies(*, session: Session = Depends(get_session),genre):
    statement = select(Movies)
    
    if genre == 'All':
        movies = session.exec(statement)
        movies = movies.all()
    else:
        statement = statement.where(Movies.genre.like(f'%{genre}%'))
        movies = session.exec(statement).all()
    return {'status':True, 'movies': movies}
