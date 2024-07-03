import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: "privacy",
    initialState:{privacyState:false},
    reducers: {
        toggle: (state) =>{
            state.privacyState = !state.privacyState
        }
    }
})

export const privacyActions = privacySlice.actions;

export default privacySlice