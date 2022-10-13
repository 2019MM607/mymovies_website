import React from 'react'
import { useNavigate, useNavigation, useRoutes } from 'react-router-dom'
import { Result } from '../../redux/thunks/movies.thunk'



interface IProps {
    movies: Result[]
}
export const MovieList = ({movies} : IProps) => {
    const [isHover, setIsHover] = React.useState<boolean>(false)
    const navigate = useNavigate()
  return (
   <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5 '>
    {
        movies?.length > 0 && 
        movies.map((movie) => (
            <div key={movie?.id} className='flex flex-col  cursor-pointer w-auto  justify-start items-center  '  onClick={()=> navigate(`/details/${movie?.id}`)}>
                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} className='w-60 h-80 rounded-lg shadow-lg' />
                <p className='text-gray-200 font-regular text-lg text-center'>{movie?.title}</p>
                <p  className='text-gray-200 font-regular text-sm bg-violet-700 p-1 rounded-full w-fit text-center'>{movie?.vote_average}</p>
                
            </div>
        ))
    }
   </div>
  )
}
