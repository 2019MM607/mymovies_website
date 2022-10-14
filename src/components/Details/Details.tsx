import React from 'react'
import { Details } from '../../hooks/useMovieInfo'
import { Result } from '../../hooks/usePopularMovies'

interface IProps {
    details : Details
}
export const Detail = ({details} : IProps) => {
  return (
    <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center' >

        <div className='m-2'>
            <img className='rounded-lg'  src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`} alt={details?.original_title} />
        </div>

        <div className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-md md:text-lg font-bold text-white'>{details?.title}</h1>
            <p className='text-sm md:text-md text-white'>{details?.release_date.toString()}</p>

            <div className='flex justify-center items-center flex-wrap'>
                <ul className='flex'>
                    {
                        details?.genres.map(genre => (
                            <li className='text-sm md:text-md text-green-400 m-1' key={genre?.id}>{genre?.name}  </li>
                        ))
                    }
                </ul>
            </div>
            <p className='text-white font-thin text-sm text-center mt-10' >{ details?.overview }</p>
            

        </div>
       
    </div>
  )
}
