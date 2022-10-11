import React from 'react'
import { movieClient } from '../api/movieClient'

export const usePopularMovies = (query : string = '') => {
  const [movies, setMovies] = React.useState<Result[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const getPopulars = async () => {
    const { data } = await movieClient.get('/movie/popular')
    if (data) {
        setMovies(data?.results)
        setIsLoading(false) 
    }
  }

  const byQuery = async () => {
    const { data } = await movieClient.get('/search/movie', {
      params: {
        query,
      },
    })
    if (data) {
      setMovies(data?.results)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
   getPopulars()
  }, [])
  
  return {
    movies,
    isLoading
  }

}



