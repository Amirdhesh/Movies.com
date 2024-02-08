import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Main() {
  const [genre, setgenre] = useState('All');
  const [movies, setmovies] = useState([]);
  const genres = ['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller'];

  useEffect(() => {
    async function FetchMovies() {
      try {
        const resp = await fetch(`/api/movies/movies/${genre}`, {
          method: 'GET'
        });
        const data = await resp.json();
        if (data.status) {
          setmovies(data.movies);
        } else {
          alert("Error fetching movies");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        alert("Error fetching movies. Please try again later.");
      }
    }
    FetchMovies();
  }, [genre]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="overflow-x-auto whitespace-nowrap py-4 px-20">
        {genres.map((genreItem, index) => (
          <button
            key={index}
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 mr-2 rounded"
            onClick={() => setgenre(genreItem)}
          >
            {genreItem}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-6 gap-4 py-3 px-20'>
        {
          movies.map((movie, index) => (
            <div key={index} className='h-96 flex flex-col justify-between bg-gray-200 border-[1px] border-gray-400 rounded-sm hover:shadow-md'>
              <div className='h-3/5 bg-slate-100'></div>
              <div className='text-center'>
                <h1>{movie.title}</h1>
              </div>
              <div className='px-5 py-2'>
                <div className='text-sm py-1'>
                  <p>Director: {movie.director}</p>
                </div>
                <div className='flex text-sm justify-between'>
                  <p>Year: {movie.year}</p>
                  <div>
                    <p className='px-1 bg-slate-50 rounded-md'>Rating: {movie.rating}</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-center py-2'>
                <button className='py-1 px-5 rounded-md bg-orange-200 hover:bg-orange-300'>Watch Now</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
