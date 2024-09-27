import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {    // This is a reducer.
        increment: (state) => {       // The reducer for increment increases state.value by 1.
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;  // now value is updated which is incremented by 1. and it is store back into the store folder.