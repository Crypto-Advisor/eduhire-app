import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register, admin } from "../../utils/users";

const initialState = {
    login: {},
    loading: false
}

export const loginThunk = createAsyncThunk(
    'login/login',
    async(username, password) =>{
        await login(username, password)
            .then(response => response.json())
            .then(data =>{
                console.log(data)
            })
    }
)

export const registerThunk = createAsyncThunk(
    'login/register',
    async(username, password)=>{
        await register(username, password)
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