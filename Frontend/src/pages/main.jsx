import React from 'react';
import Navbar from '../components/Navbar';

export default function Main() {
  // Sample movie genres
  const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller'];
  const movies = ['SDca','saksc','alsk','LMsd0','kzSd','lskdok']

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="overflow-x-auto whitespace-nowrap py-4 px-20">
        {genres.map((genre, index) => (
          <button
            key={index}
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 mr-2 rounded"
          >
            {genre}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-5 gap-4 py-10 px-20'>
        {
          movies.map((movie,index) => (
            <div key = {index} className='h-80 bg-gray-200 border-[1px] border-gray-400 rounded-sm'>
              
              <div className='h-3/5 bg-slate-100'>

              </div>
              <div className='text-center'>
                <h1>{movie}</h1>
              </div>
              <div className='px-5 py-2'>
                <div className='text-sm py-1  '>
                  <p>director : zSd</p>
                </div>
                <div className='flex text-sm justify-between'>
                  <p>Year : 2003</p>
                  <div>
                    <p className='px-1 bg-slate-50 rounded-md'>Rating : 4.50</p>
                    </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className='py-1 px-5 rounded-md hover:text-white bg-orange-200 hover:bg-orange-900'>Watch Now</button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
}
