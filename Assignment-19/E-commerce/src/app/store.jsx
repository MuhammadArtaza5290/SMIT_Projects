import {configureStore} from "@reduxjs/toolkit"
import productReducer  from "../features/slices/productSlice";
export const store = configureStore({
    reducer: {
        productSlice: productReducer,
    },
});