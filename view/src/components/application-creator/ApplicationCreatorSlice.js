import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createForm } from "../../utils/forms";
import { authenticate } from '../../utils/users';

const initialState = {
    application: {},
    loading: false
}

export const getUserThunk = createAsyncThunk(
    'applicationcreator/getUser',
    async() =>{
        const response = await authenticate(localStorage.token)
        console.log(response)
    }
)

export const createFormThunk = createAsyncThunk(
    'applicationcreator/createForm',
    async(data) =>{
        console.log('calling create form')
        const response = await createForm(localStorage.token, data)
        console.log(response)
    }
)

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