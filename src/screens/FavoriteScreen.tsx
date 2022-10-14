import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome} from "react-icons/fa";

import { Details } from '../hooks/useMovieInfo'
import { LoadAnimation } from '../components/animation/LoadAnimation';
import { MovieList } from '../components/utils/MovieList'
import animationData from '../../public/97437-no-data-found.json';

export const FavoriteScreen = () => {
    const [favorites, setFavorites] = React.useState<Details[]>([])

    React.useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favorites') || '[]')
        setFavorites(favs)
    }, [])
    
    return (
        <div className={`bg-slate-900 flex flex-col items-center ${favorites.length > 2 && 'md:h-screen h-auto'}`}>
            <div className='flex w-full p-5'>
                <Link to='/' className='text-violet-700 '><FaHome className='text-xl' /></Link>
            </div>
            {
                favorites.length > 0 ?
                <div className='mt-5 md:mt-10'>
                    <MovieList movies={favorites} /> 
                </div> :

                <div className=' w-full  bg-slate-900 flex flex-col justify-center items-center'>
                    <h1 className='text-white font-bold'>There are not favorites...</h1>
                    <LoadAnimation animationData={animationData} />
                </div>
            }
        </div>
    )
}
