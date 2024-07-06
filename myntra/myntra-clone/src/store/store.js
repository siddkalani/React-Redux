import {configureStore, createSlice} from '@reduxjs/toolkit'
import itemSlice from './itemSlice'
import FetchStatusSlice from './FetchStatusSlice'
import bagSlice from './bagSlice'

const myntraStore = configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:FetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
})

export default myntraStore