import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { autoLogin } from '../redux/slices/auth.slice'
import { useAppDispatch } from '../redux/store'
import { DetailScreen } from '../screens/DetailScreen'
import { FavoriteScreen } from '../screens/FavoriteScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { Main } from '../screens/Main'
import { NotFound } from '../screens/NotFound'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(autoLogin())
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<PublicRoute> <LoginScreen /></PublicRoute>} />

                <Route path="/" element={<PrivateRoute><Main /></PrivateRoute>}>
                    <Route index element={<PrivateRoute><HomeScreen /></PrivateRoute>} />
                    <Route path="/details/:id" element={<PrivateRoute><DetailScreen /></PrivateRoute>} />
                    <Route path="favorites" element={<PrivateRoute><FavoriteScreen /></PrivateRoute>} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
