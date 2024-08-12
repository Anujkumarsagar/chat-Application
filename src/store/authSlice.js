// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
    },
    reducers: {
        authLogin: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        authLogout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});

export const { authLogin, authLogout } = authSlice.actions;
export default authSlice.reducer;
