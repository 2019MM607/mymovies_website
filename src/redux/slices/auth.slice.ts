import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { login } from '../thunks/auth.thunk';

export interface RootObject {
    token: string;
    isAuthenticated: boolean;
}


const initialState: RootObject = {
    token: '',
    isAuthenticated: true,
}

export const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        autoLogin: (state) => {
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token') || '';
                state.isAuthenticated = true;
            } else {
                state.token = '';
                state.isAuthenticated = false;
            }

        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.token = payload.token;
            state.isAuthenticated = true;
        })
    },
})

// Action creators are generated for each case reducer function
export const { autoLogin } = authslice.actions

export default authslice.reducer