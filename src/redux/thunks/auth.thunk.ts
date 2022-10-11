import { createAsyncThunk } from '@reduxjs/toolkit'
import { authClient } from '../../api/authClient';

interface Payload {
    email: string;
    password: string;
}
export const login = createAsyncThunk(
    'auth/login',
    async (payload: Payload) => {
        const { data } = await authClient.post('/', {
            email: payload.email,
            password: payload.password,
        })
        localStorage.removeItem('token')
        localStorage.setItem('token', data.token)
        return data ? data : null;
    }
)