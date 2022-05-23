import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchFormsByUsername } from '../../utils/forms';

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