import React from 'react'
import { Cast } from '../../hooks/useMovieInfo'
import { ListTitle } from '../utils/ListTitle'

interface IProps {
    cast: Cast[]
}
export const CastList = ({cast} : IProps) => {
 
  return (
    <div>
      <ListTitle title='Cast' />
        
        <div className='grid grid-cols-1  md:grid-cols-2 justify-items-center '>
          {
            cast?.map((item : Cast) =>(
              <div className=' flex  md:w-1/2 mb-10 w-[80%] md:mb-5 rounded-full justify-between' key={item?.id}>
                {
                  item?.profile_path && 
                  <>
                  <img src={`https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt={item?.name}  className='w-20 rounded-full h-20 object-cover' />
                  <div className=''>
                    <p className='text-white text-right font-semibold mb-2' >{item?.original_name}</p>
                    <p className='text-white text-right' >as {item?.character}</p>
                  </div>
                  </>
                }
                
              </div>
             
            ))
          }
        </div>
    </div>
  )
}
