import React from 'react'
import { Result } from '../../redux/thunks/movies.thunk'
import { ListTitle } from '../utils/ListTitle';
import { MovieList } from '../utils/MovieList';

interface IProps {
    relateds: Result[],
    title : string
}
export const RelatedList = ({relateds, title} : IProps) => {
  return (
    <div className=''>
       <ListTitle title='Relateds'  />

       <MovieList movies={relateds} />

    </div>
  )
}
