import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register, admin } from "../../utils/users";

const initialState = {
    login: {},
    loggedIn: false,
    loading: true,
    registered: ''
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
        const res = await register(data)
        console.log(res)
    }
)

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{

    },
    extraReducers: {
        [loginThunk.pending]: (state) =>{
            state.loading = true;
        },
        [loginThunk.fulfilled]: (state, action) =>{
            state.loading = false;
            state.loggedIn = true;
        },
        [loginThunk.rejected]: (state) =>{
            state.loading = false;
            state.loggedIn = false;
        },
        [registerThunk.fulfilled]: (state, action) =>{
            state.registered = 'true';
        },
        [registerThunk.rejected]: (state) =>{
            state.registered = 'false';
        }
    }
})

export const loginSelector = state => state.login
export default LoginSlice.reducer