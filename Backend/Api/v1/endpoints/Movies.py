from fastapi import APIRouter, Depends
from Model.movies_model import MovieCreate, Movies
from Db.config import get_session, Session, select
router = APIRouter()


@router.get('/movies')
def get_movies(*, session: Session = Depends(get_session)):
#     movies = [
#     {
#       "title": "Inception",
#       "description": "A thief who enters the dreams of others to steal their secrets from their subconscious.",
#       "release_year": 2010,
#       "rating": 8.8,
#       "director": "Christopher Nolan",
#       "genre": "Sci-Fi, Action, Thriller"
#     },
#     {
#       "title": "The Shawshank Redemption",
#       "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
#       "release_year": 1994,
#       "rating": 9.3,
#       "director": "Frank Darabont",
#       "genre": "Drama"
#     },
#     {
#       "title": "The Dark Knight",
#       "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
#       "release_year": 2008,
#       "rating": 9.0,
#       "director": "Christopher Nolan",
#       "genre": "Action, Crime, Drama"
#     },
#     {
#       "title": "Pulp Fiction",
#       "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
#       "release_year": 1994,
#       "rating": 8.9,
#       "director": "Quentin Tarantino",
#       "genre": "Crime, Drama"
#     },
#     {
#       "title": "The Godfather",
#       "description": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
#       "release_year": 1972,
#       "rating": 9.2,
#       "director": "Francis Ford Coppola",
#       "genre": "Crime, Drama"
#     },
#     {
#       "title": "Schindler's List",
#       "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
#       "release_year": 1993,
#       "rating": 8.9,
#       "director": "Steven Spielberg",
#       "genre": "Biography, Drama, History"
#     },
#     {
#       "title": "The Lord of the Rings: The Return of the King",
#       "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
#       "release_year": 2003,
#       "rating": 8.9,
#       "director": "Peter Jackson",
#       "genre": "Adventure, Drama, Fantasy"
#     },
#     {
#       "title": "Fight Club",
#       "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
#       "release_year": 1999,
#       "rating": 8.8,
#       "director": "David Fincher",
#       "genre": "Drama"
#     },
#     {
#       "title": "Forrest Gump",
#       "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
#       "release_year": 1994,
#       "rating": 8.8,
#       "director": "Robert Zemeckis",
#       "genre": "Drama, Romance"
#     },
#     {
#       "title": "The Matrix",
#       "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
#       "release_year": 1999,
#       "rating": 8.7,
#       "director": "Lana Wachowski, Lilly Wachowski",
#       "genre": "Action, Sci-Fi"
#     },
#     {
#       "title": "Goodfellas",
#       "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
#       "release_year": 1990,
#       "rating": 8.7,
#       "director": "Martin Scorsese",
#       "genre": "Biography, Crime, Drama"
#     },
#     {
#       "title": "The Silence of the Lambs",
#       "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
#       "release_year": 1991,
#       "rating": 8.6,
#       "director": "Jonathan Demme",
#       "genre": "Crime, Drama, Thriller"
#     },
#     {
#       "title": "Se7en",
#       "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
#       "release_year": 1995,
#       "rating": 8.6,
#       "director": "David Fincher",
#       "genre": "Crime, Drama, Mystery"
#     },
#     {
#       "title": "The Green Mile",
#       "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
#       "release_year": 1999,
#       "rating": 8.6,
#       "director": "Frank Darabont",
#       "genre": "Crime, Drama, Fantasy"
#     },
#     {
#       "title": "The Departed",
#       "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
#       "release_year": 2006,
#       "rating": 8.5,
#       "director": "Martin Scorsese",
#       "genre": "Crime, Drama, Thriller"
#     },
#     {
#       "title": "Gladiator",
#       "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
#       "release_year": 2000,
#       "rating": 8.5,
#       "director": "Ridley Scott",
#       "genre": "Action, Adventure, Drama"
#     },
#     {
#       "title": "The Prestige",
#       "description": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
#       "release_year": 2006,
#       "rating": 8.5,
#       "director": "Christopher Nolan",
#       "genre": "Drama, Mystery, Sci-Fi"
#     },
#     {
#       "title": "The Usual Suspects",
#       "description": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
#       "release_year": 1995,
#       "rating": 8.5,
#       "director": "Bryan Singer",
#       "genre": "Crime, Mystery, Thriller"
#     },
#     {
#       "title": "The Lion King",
#       "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
#       "release_year": 1994,
#       "rating": 8.5,
#       "director": "Roger Allers, Rob Minkoff",
#       "genre": "Animation, Adventure, Drama"
#     },
#     {
#       "title": "Saving Private Ryan",
#       "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
#       "release_year": 1998,
#       "rating": 8.6,
#       "director": "Steven Spielberg",
#       "genre": "Drama, War"
#     }
#   ]
#     for i in movies:
#        movie = Movies(**i)
#        session.add(movie)
#        session.commit()
    select
    session.
    return {'status':True}
