import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    application: {},
    loading: false
}

const ApplicationCreatorSlice = createSlice({
    name: 'applicationcreator',
    initialState,
    reducers:{

    },
    extraReducers: {
       
    }
})

export const applicationCreatorSelector = state => state.application
export default ApplicationCreatorSlice.reducer