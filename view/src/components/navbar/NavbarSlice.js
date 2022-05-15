import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    navbar: {},
    loading: false
}

const NavbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers:{

    },
    extraReducers: {
       
    }
})

export const loginSelector = state => state.navbar
export default NavbarSlice.reducer