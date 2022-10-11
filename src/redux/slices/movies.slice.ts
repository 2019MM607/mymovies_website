import { createSlice } from '@reduxjs/toolkit'
import { getMovies, Result } from '../thunks/movies.thunk';


export interface RootObject {
    movies : Result[]
}


const initialState: RootObject = {
    movies: []
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, { payload }) => {
            state.movies = payload?.results;
        })
    },
})

// Action creators are generated for each case reducer function


export default moviesSlice.reducer