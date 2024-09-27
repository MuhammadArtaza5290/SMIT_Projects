import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../featuree/counterSlice/counterSlice'
export const store = configureStore({
  reducer: {                  //The store forwards the increment action to the counterSlice.js reducer.
    counter: counterSlice,  // Adding the counter reducer to the store  . here, now value is updated 
  },  
})