import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk(
          'product/fetchProducts',
          async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            // console.log("Api data is :", data);
            return data;
          }
)
export const productSlice = createSlice({
    name : 'product',
    initialState: {
       products: [],
    },
    reducers : {
        deleteProduct: (state, action)=> {
        let id = action.payload;
        let filterProduct = state.products.filter(product => product.id !== id);
        state.products = filterProduct;
        // console.log("This is delete product", state.products);
        
    },
        addProduct: (state, action)=> {
            state.products = [...state.products, {...action.payload}]
            // console.log(state.products.push({...action.payload}));
        }
    },

extraReducers: builder => {
    builder.addCase(fetchProduct.fulfilled, (state, action)=>{
       
        state.products = action.payload
    },)
}

 
});
 export const { deleteProduct,addProduct } = productSlice.actions;
export default productSlice.reducer;