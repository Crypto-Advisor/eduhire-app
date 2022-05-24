import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchResponses } from "../../utils/responses"

const initialState = {
    responses: {},
    loading: false,
    loaded: false
}

export const fetchResponsesThunk = createAsyncThunk(
    'responses/loadResponses',
    async(id) =>{
        console.log('fetching responses');
        const responseData = await fetchResponses(localStorage.token, id)
        console.log(responseData)
        return responseData;
    }
)

const ResponsesSlice = createSlice({
    name: 'responses',
    initialState,
    reducers:{

    },
    extraReducers: {
        [fetchResponsesThunk.pending]: (state) =>{
            state.loading = true
        },
        [fetchResponsesThunk.fulfilled]: (state, action) =>{
            state.loading = false
            state.responses = action.payload
            state.loaded = true
        },
        [fetchResponsesThunk.rejected]: (state) =>{
            state.loading = false
        }
    }
})

export const responsesSelector = state => state.responses
export default ResponsesSlice.reducer