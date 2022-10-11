import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth.slice'
import moviesReducer from './slices/movies.slice'

import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        movies: moviesReducer
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector