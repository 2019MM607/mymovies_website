import React, { ReactElement, ReactNode } from 'react'
import { RootState, useAppSelector } from '../redux/store'
import { Navigate } from 'react-router-dom'

interface IProps {
  children: ReactNode
}
export const PrivateRoute = ({  children }: IProps)  => {
  const auth = useAppSelector((state: RootState) => state.auth)
  return auth.isAuthenticated ? <>{children}</>  : <Navigate to="/login" />
}
