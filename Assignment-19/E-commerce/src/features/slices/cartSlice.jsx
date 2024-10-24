import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        value: 1,  // Initial value of cart counter
        cartItems: [],
    } ,
    reducers: {
        addToCart: (state, action)=> {
            const item = action.payload;
            // console.log("this is item where we store action.payload", item);
            
            const existingItem = state.cartItems.find(items => items.id === item.id);
            // console.log("This is cart item", existingItem);

            if(existingItem){
                existingItem.quantity++;
                // console.log("This is cart item", existingItem.quantity++);

            }else{
                state.cartItems.push({...item, quantity: 1})
                // console.log("This is cart item else", state.cartItems.push({...item, quantity: 1}) )
            }
        },
        increment: (state, action) => {
           const item = state.cartItems.find((product)=> product.id === action.payload);
           
            if(item){
                item.quantity++;
            }
        },
        decrement: (state,action) => {
           const item = state.cartItems.find((product)=> product.id === action.payload);
           if (item){
            item.quantity--;
           }
            if(item.quantity < 1){
                state.cartItems = state.cartItems.filter((product)=> product.id!== action.payload);
            }

        },
       
    },
})

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;