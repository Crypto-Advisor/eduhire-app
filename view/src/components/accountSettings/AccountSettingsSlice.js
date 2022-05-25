import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateUser, setContact } from "../../utils/users";

const initialState = {
    user: {},
    loading: false,
    done: false
}

export const fetchUserThunk = createAsyncThunk(
    'accountsettings/fetchUser',
    async() =>{
        return JSON.parse(localStorage.user)
    }
)

export const setContactThunk = createAsyncThunk(
    'accountsettings/setContact',
    async(data) =>{
        const response = await setContact(localStorage.token, data);
        console.log(response)
        return response
    }
)

export const updateUserThunk = createAsyncThunk(
    'accountsettings/updateUser',
    async(data) =>{
        const response = await updateUser(localStorage.token, data);
        console.log(response)
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user))
        return response
    }
)

const AccountSettingsSlice = createSlice({
    name: 'accountsettings',
    initialState,
    reducers:{

    },
    extraReducers: {
        [updateUserThunk.pending]: (state) =>{
            state.loading = true
            state.done = false
        },
        [updateUserThunk.fulfilled]: (state, action) =>{
            state.loading = false
            state.done = true
            state.user = action.payload
        },
        [updateUserThunk.rejected]: (state) =>{
            state.loading = false
            state.done = false
        },
        [fetchUserThunk.fulfilled]: (state, action) =>{
            state.user = action.payload
        },
    }
})

export const AccountSettingsSelector = state => state.user
export default AccountSettingsSlice.reducer
