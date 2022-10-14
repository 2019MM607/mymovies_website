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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<PublicRoute> <LoginScreen /></PublicRoute>} />

                    <Route path="/" 
                        element={<PrivateRoute>
                                    <HomeScreen />
                                </PrivateRoute>} />

                    <Route path="/details/:id" 
                           element={<PrivateRoute>
                                        <DetailScreen />
                                    </PrivateRoute>} />

                    <Route path="/favorites" 
                        element={<PrivateRoute>
                                    <FavoriteScreen />
                                </PrivateRoute>} />


                    <Route path='*' 
                        element={ <PrivateRoute>
                                    <NotFound />
                                  </PrivateRoute> } />
               
            </Routes>
        </BrowserRouter>
    )
}
