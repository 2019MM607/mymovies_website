import React from 'react'
import { Result } from '../../hooks/usePopularMovies'

interface IProps {
    movies: Result[]
}
export const MovieList = ({movies} : IProps) => {
  return (
   <div className='flex flex-wrap justify-center gap-10 mt-2'>
    {
        movies?.length > 0 && 
        movies.map((movie) => (
            <div key={movie.id} className='flex flex-col items-center cursor-pointer'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-60 h-80 rounded-lg shadow-lg' />
                <p className='text-gray-200 font-regular text-lg'>{movie.title}</p>
                <p className='text-gray-200 font-regular text-sm bg-violet-700 p-1 rounded-full'>{movie.vote_average}</p>

            </div>
        ))
    }
   </div>
  )
}
