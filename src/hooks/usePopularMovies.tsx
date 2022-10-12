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

export interface RootObject {
 page:          number;
 results:       Result[];
 total_pages:   number;
 total_results: number;
}

export interface Result {
 adult:             boolean;
 backdrop_path:     string;
 genre_ids:         number[];
 id:                number;
 original_language: OriginalLanguage;
 original_title:    string;
 overview:          string;
 popularity:        number;
 poster_path:       string;
 release_date:      Date;
 title:             string;
 video:             boolean;
 vote_average:      number;
 vote_count:        number;
}

export enum OriginalLanguage {
 En = "en",
}




