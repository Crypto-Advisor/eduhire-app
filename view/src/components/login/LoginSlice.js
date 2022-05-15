import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {},
    loading: false
}

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