import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { login } from '../redux/thunks/auth.thunk'

export const LoginScreen = () => {
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(login({ email: 'eve.holt@reqres.in', password: 'cityslicka' }))
    // }, [])

    return (
        <div>LoginScreen</div>
    )
}
