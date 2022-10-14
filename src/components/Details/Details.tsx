import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa";

import { Details } from '../../hooks/useMovieInfo'
import { isFavoriteItem, toggleFavoriteItem } from '../../helpers/verifyFavorite';
interface IProps {
    details : Details
}
export const Detail = ({details} : IProps) => {
    const [isFavorite, setIsFavorite] = React.useState(false)

    React.useEffect(() => {
        const isFav = isFavoriteItem(details?.id)
        setIsFavorite(isFav)
    }, [])

    const handleFavorite = () => {
       toggleFavoriteItem(details, !isFavorite)
    }

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

            <div className=' flex mt-2 gap-2' >
                <p className='text-white font-bold text-sm text-center' >{ details?.vote_average.toFixed(2) }</p>
                <FaStar className='text-violet-700' />
            </div>

            <div className=' w-full mt-5 flex justify-around items-center gap-2 cursor-pointer' onClick={()=> setIsFavorite(!isFavorite)}>
               <FaHeart 
                className={isFavorite ? 'text-violet-700' : 'text-gray-500' } 
                onClick={handleFavorite}
               />
               
               <Link to='/favorites' className='text-gray-400 hover:text-violet-700'>
                Go to favorites
               </Link>
            </div>
            
        </div>
       
    </div>
  )
}
