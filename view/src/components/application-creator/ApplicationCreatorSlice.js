import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createForm } from "../../utils/forms";

const initialState = {
    application: {},
    loading: false
}

export const createFormThunk = createAsyncThunk(
    'applicationcreator/createForm',
    async(data) =>{
        const response = await createForm(data)
            .then(response => response.json())
            .then(data => console.log("create form " + data))
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