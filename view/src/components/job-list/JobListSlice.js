import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchForms } from "../../utils/forms";

const initialState = {
    forms: [],
    loading: false,
    loaded: false
}

export const fetchFormsThunk = createAsyncThunk(
    'joblist/loadForms',
    async() =>{
        console.log('fetching forms')
        const formData = await fetchForms()
        return formData
    }
)

const JobListSlice = createSlice({
    name: 'joblist',
    initialState,
    reducers:{

    },
    extraReducers: {
        [fetchFormsThunk.pending]: (state) =>{
            state.loading = true
        },
        [fetchFormsThunk.fulfilled]: (state, action) =>{
            state.loading = false
            state.forms = action.payload
            state.loaded = true
        },
        [fetchFormsThunk.rejected]: (state) =>{
            state.loading = false
        }
    }
})

export const jobListSelector = state => state.forms
export default JobListSlice.reducer