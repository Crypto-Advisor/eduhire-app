import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register, admin } from "../../utils/users";

const initialState = {
    login: {},
    loading: false
}

export const loginThunk = createAsyncThunk(
    'login/login',
    async(data) =>{
        console.log('calling login')
        const res = await login(data)
        localStorage.setItem('token', res.token);
        // document.cookie = `token=${res.token};`;
        // document.cookie = `_id=${res.user._id};`;
        localStorage.setItem('user', JSON.stringify(res.user));
        console.log(res)
    }
)

export const registerThunk = createAsyncThunk(
    'login/register',
    async(data)=>{
        const res = await login(data)
        console.log(res)
    }
)

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{

    },
    extraReducers: {
       
    }
})

export const loginSelector = state => state.login
export default LoginSlice.reducer