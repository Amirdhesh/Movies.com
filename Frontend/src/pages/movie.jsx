import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

export default function Movie() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const title = location.state?.moviename;

  useEffect(() => {
    async function fetchMovie() {
      if (!title) return; // Exit early if title is not available
      
      try {
        const resp = await fetch(`/api/movies/movie/${title}`, {
          method: 'GET'
        });
        const data = await resp.json();
        if (data.status) {
          setMovie(data.movie);
        } else {
          alert("Error fetching movie");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
        alert("Error fetching movie. Please try again later.");
      }
    }
    fetchMovie();
  }, [title]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='px-20 py-4'>
        <div className='flex items-center'>
          <div className='py-5 px-1 bg-orange-400 rounded-lg'></div>
          <div className='px-2 font-bold'>
            <h1>{movie.title}</h1> {/* Ensure to handle null or undefined movie.name */}
          </div>
        </div>
        <div className='py-4'>
          <div className='h-[25rem] bg-slate-100'>
            {/* Render movie details */}
          </div>
        </div>
        <div className='py-2'>
          <div className='py-2 flex justify-between items-center'>
            <div>
              <h2 className="text-lg font-semibold">Description:</h2>
              <p>{movie.description}</p> {/* Ensure to handle null or undefined movie.description */}
            </div>
            <div className='px-2 py-1 bg-orange-300 rounded-md'>
              <p>Rating:{movie.rating}</p> {/* Ensure to handle null or undefined movie.rating */}
            </div>
          </div>
          <div className='py-2'>
            <h2 className="text-lg font-semibold">Director:</h2>
            <p>{movie.director}</p> {/* Ensure to handle null or undefined movie.director */}
          </div>
          <div className='py-2'>
            <h2 className="text-lg font-semibold">Release Year:</h2>
            <p>{movie.release_year}</p> {/* Ensure to handle null or undefined movie.release_year */}
          </div>
          <div className='py-2'>
            <h2 className="text-lg font-semibold">Genre:</h2>
            <p>{movie.genre}</p> {/* Ensure to handle null or undefined movie.genre */}
          </div>
        </div>
      </div>
    </div>
  );
}
