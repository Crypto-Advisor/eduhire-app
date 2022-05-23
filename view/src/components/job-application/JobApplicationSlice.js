import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchForm } from "../../utils/forms";
import { createResponse } from "../../utils/responses"

const initialState = {
    form: [],
    loading: false,
    done: false
}

export const fetchFormThunk = createAsyncThunk(
    'jobapplication/loadForm',
    async(id) =>{
        console.log('fetching form')
        const formData = await fetchForm(id)
        //console.log(formData)
        return formData
    }
)

export const submitFormThunk = createAsyncThunk(
    'jobapplication/submitForm',
    async(data) =>{
        const response = await createResponse(localStorage.token, data)
        console.log(response)
    }
)

const JobApplicationSlice = createSlice({
    name: 'jobapplication',
    initialState,
    reducers:{

    },
    extraReducers: {
        [fetchFormThunk.pending]: (state) =>{
            state.loading = true
        },
        [fetchFormThunk.fulfilled]: (state, action) =>{
            state.loading = false
            state.done = true
            state.form = action.payload
            console.log(state.form)
        },
        [fetchFormThunk.rejected]: (state) =>{
            state.loading = false
        }
    }
})

export const jobApplicationSelector = state => state.form
export default JobApplicationSlice.reducer