import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: false
}

const ApplicationListSlice = createSlice({
    name: 'applicationlist',
    initialState,
    reducers:{

    },
    extraReducers: {
       
    }
})

export const applicationListSelector = state => state.list
export default ApplicationListSlice.reducer