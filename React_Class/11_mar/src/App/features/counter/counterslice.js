const {createSlice} =require("@reduxjs/toolkit")

const initialState={
    value: 0
}


export const counterSlice=createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.value +=1
        },
        decrement: (state)=>{
            state.value -=1
        },
        incrementbyvalue: (state,action)=>{
            state.value+= action.payload
        }
    }
})