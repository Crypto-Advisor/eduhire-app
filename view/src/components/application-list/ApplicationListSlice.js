import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFormsByUsername, removeForm } from '../../utils/forms';

const initialState = {
    list: [],
    loading: false
}

export const getApplicationListThunk = createAsyncThunk(
    'applicationlist/getlist',
    async() =>{
        const username = JSON.parse(localStorage.user).username
        const listData = await fetchFormsByUsername(username)
        return listData
    }
)

export const deleteApplicationThunk = createAsyncThunk(
    'applicationlist/delete',
    async(data) =>{
        const response = await removeForm(localStorage.token, data)
        console.log(response)
    }
)

const ApplicationListSlice = createSlice({
    name: 'applicationlist',
    initialState,
    reducers:{

    },
    extraReducers: {
        [getApplicationListThunk.pending]: (state) =>{
            state.loading = true
        },
        [getApplicationListThunk.fulfilled]: (state, action) =>{
            state.loading = false
            state.list = action.payload
        },
        [getApplicationListThunk.rejected]: (state) =>{
            state.loading = false
        }
    }
})

export const applicationListSelector = state => state.list
export default ApplicationListSlice.reducer