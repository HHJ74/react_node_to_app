import { createSlice } from '@reduxjs/toolkit'; // 1. slice 생성

const initialState = {
    authData: JSON.parse(localStorage.getItem('authData')) || null,
    token: localStorage.getItem('token') || null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login: (state, action)=>{
            state.authData= action.payload.authData;
            state.token = action.payload.token;
            localStorage.setItem('authData', JSON.stringify(action.payload.authData));
            localStorage.setItem('token', action.payload.token);

        },
        logout:(state)=>{
            state.authData= null;
            state.token = null;
            localStorage.removeItem('authData');
            localStorage.removeItem('token');
        },
    },
}); //slice 생성

export const {login,logout} = authSlice.actions;
export default authSlice.reducer; // 4. export 된 함수들을 store에 등록
