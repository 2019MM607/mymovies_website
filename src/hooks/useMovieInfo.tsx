import React from 'react'

import { movieClient } from '../api/movieClient'
import { Result } from '../redux/thunks/movies.thunk'

export const useMovieInfo = (id: string) => {
    const [details, setDetails] = React.useState<Details>()
    const [loading, setLoading] = React.useState<boolean>(true)
    const [cast, setCats] = React.useState<Cast[]>([])
    const [relateds, setRelateds] = React.useState<Result[]>([])

    const getMovieInfo = async () => {
        const details = await movieClient.get(`/movie/${id}`)
        const cast = await movieClient.get(`/movie/${id}/credits`)

        //splice cast to get only 10 items
        cast.data.cast.length > 10 && cast.data.cast.splice(10, cast.data.cast.length - 10)

        const relateds = await movieClient.get(`/movie/${id}/recommendations`)
        setLoading(true)
        setTimeout(() => {
            setDetails(details?.data)
            setCats(cast?.data.cast)
            setRelateds(relateds?.data.results)
            setLoading(false)
        }, 2000);


    }

    React.useEffect(() => {
        getMovieInfo()
    }, [])
    
    return {
        details,
        loading,
        cast,
        relateds,
        getMovieInfo
    }
 
}

export interface Details {
 adult:                 boolean;
 backdrop_path:         string;
 belongs_to_collection: BelongsToCollection;
 budget:                number;
 genres:                Genre[];
 homepage:              string;
 id:                    number;
 imdb_id:               string;
 original_language:     string;
 original_title:        string;
 overview:              string;
 popularity:            number;
 poster_path:           string;
 production_companies:  ProductionCompany[];
 production_countries:  ProductionCountry[];
 release_date:          Date;
 revenue:               number;
 runtime:               number;
 spoken_languages:      SpokenLanguage[];
 status:                string;
 tagline:               string;
 title:                 string;
 video:                 boolean;
 vote_average:          number;
 vote_count:            number;
}

export interface BelongsToCollection {
 backdrop_path: string;
 id:            number;
 name:          string;
 poster_path:   string;
}

export interface Genre {
 id:   number;
 name: string;
}

export interface ProductionCompany {
 id:             number;
 logo_path:      string;
 name:           string;
 origin_country: string;
}

export interface ProductionCountry {
 iso_3166_1: string;
 name:       string;
}

export interface SpokenLanguage {
 english_name: string;
 iso_639_1:    string;
 name:         string;
}

//------------------


export interface Cast {
 adult:                boolean;
 cast_id?:             number;
 character?:           string;
 credit_id:            string;
 department?:          Department;
 gender:               number;
 id:                   number;
 job?:                 string;
 known_for_department: Department;
 name:                 string;
 order?:               number;
 original_name:        string;
 popularity:           number;
 profile_path:         null | string;
}

export enum Department {
 Acting = "Acting",
 Art = "Art",
 Camera = "Camera",
 CostumeMakeUp = "Costume & Make-Up",
 Crew = "Crew",
 Directing = "Directing",
 Editing = "Editing",
 Lighting = "Lighting",
 Production = "Production",
 Sound = "Sound",
 VisualEffects = "Visual Effects",
 Writing = "Writing",
}
