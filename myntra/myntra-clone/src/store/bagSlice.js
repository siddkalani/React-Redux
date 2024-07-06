import {createSlice} from '@reduxjs/toolkit'


const bagSlice = createSlice({
    name:'bag',
    initialState:["001"],
    reducers:{
        AddToBag:(state,action)=>{
            state.push(action.payload())
        },
        removeFromBag:()=>{

        }
    }
})

export const bagActions = bagSlice.actions
export default bagSlice