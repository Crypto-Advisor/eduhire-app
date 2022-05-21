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
        console.log(res)
    }
)

export const registerThunk = createAsyncThunk(
    'login/register',
    async(data)=>{
        await register(data)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
        })
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