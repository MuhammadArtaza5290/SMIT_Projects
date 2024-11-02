// authSlice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, CollectionReference, getDoc } from "firebase/firestore";
import { auth, storage } from "../../config/firebase"
import { db } from "../../config/firebase";
export const login = createAsyncThunk(
    "auth/login",
    async (user)=>{
        try {
            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
            const doc = getDoc(Collection(db, "user"), )
        } catch (error) {
            console.log("error", error);
            
        }
    return user
})

 export const signup = createAsyncThunk(
    "auth/signup",
    async (user)=>{
        try {
           const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
           let saveUserTodb= {
            email: user.email,
            name: user.name,
            phone: user.phone,
            address: user.address,
            gender: user.gender,
            uid: userCredential.user.uid
           }
            console.log("signup in slice", user);
            await addDoc(doc(db, "users",userCredential.user.uid), saveUserTodb)
            return saveUserTodb
            
        } catch (error) {
            console.log("error", error);
            
        }
        return user
    }
 )

const initialStae = {
    user: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialStae,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(signup.fulfilled, (state, action)=>{
            console.log("action", action.payload);
            state.user = action.payload
            
        })
    }
})
export const {setUser} = authSlice.actions;
export default authSlice.reducer