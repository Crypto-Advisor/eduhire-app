import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchForms } from "../../utils/forms";

const initialState = {
    forms: [],
    loading: false
}

export const fetchFormsThunk = createAsyncThunk(
    'joblist/loadForms',
    async() =>{
        const formData = await fetchForms()
            .then(response => response.json())
            .then(data =>{
                console.log(data)
                return (data)
            })
            .catch(err => console.log(err))
        
        console.log(formData)
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
        },
        [fetchFormsThunk.rejected]: (state) =>{
            state.loading = false
        }
    }
})

export const jobListSelector = state => state.forms
export default JobListSlice.reducer