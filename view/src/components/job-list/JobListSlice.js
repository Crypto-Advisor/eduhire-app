import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchForms } from "../../utils/forms";

const initialState = {
    forms: [],
    loading: false
}

export const fetchFormsThunk = createAsyncThunk(
    'joblist/loadForms',
    async() =>{
        console.log('hi')
        const formData = await fetchForms()
            .then(response => response.json())
            .then(data =>{
                return (data)
            })

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
            state.forms = action
        },
        [fetchFormsThunk.rejected]: (state) =>{
            state.loading = false
        }
    }
})

export const jostListSelector = state => state.forms
export default JobListSlice.reducer