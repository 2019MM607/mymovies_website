import React from 'react'
import { useParams } from 'react-router-dom'
import { CastList } from '../components/Details/CastList';
import { Detail } from '../components/Details/Details';
import { RelatedList } from '../components/Details/RelatedList';
import { Details, useMovieInfo } from '../hooks/useMovieInfo';
import { Result } from '../hooks/usePopularMovies';

export const DetailScreen = () => {
    const {id} = useParams<{ id: string }>()
    const {details, cast, loading, relateds, getMovieInfo } = useMovieInfo(id as string)

    // to catch a refresh and get the movie info again without reloading the page and go to the top of the page
    React.useLayoutEffect(() => {
      getMovieInfo()
      window.scrollTo(0, 0)
      console.log(loading)
    }, [id])
    

    return (
        <>
        {
            loading ? <div className='text-white flex justify-center items-center bg-slate-900 text-2xl w-full h-screen'>Loading...</div> : 
            <div className='bg-slate-900'>

                <div className='w-full flex justify-center '>
                    <Detail details={details as Details} />
                </div>

                <div className='mt-5 mb-5'>
                    <CastList cast={cast} />
                </div>

                <div>
                    <RelatedList relateds={relateds} title={details?.title as string} />
                </div>
            </div>
        }
       
        </>
    )
}
