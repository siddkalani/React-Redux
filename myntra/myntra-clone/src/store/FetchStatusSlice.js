import { createSlice } from '@reduxjs/toolkit'

const FetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (state) => {
        state.fetchDone = true;
        },
        markFetchStart: (state) => {
           state.currentlyFetching = true;
        },
        markFetchEnd: (state) => {
           state.currentlyFetching = false;
        }
    }
})

export const FetchActions = FetchStatusSlice.actions

export default FetchStatusSlice