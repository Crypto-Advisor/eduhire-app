import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    response: {},
    loading: false
}

const JobApplicationSlice = createSlice({
    name: 'jobapplication',
    initialState,
    reducers:{

    },
    extraReducers: {
       
    }
})

export const jobApplicationSelector = state => state.response
export default JobApplicationSlice.reducer