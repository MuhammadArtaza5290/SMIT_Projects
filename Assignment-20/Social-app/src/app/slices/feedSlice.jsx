// slices/feedSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs, onSnapshot, query, where, orderBy, limit,doc ,updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
// 1) ref: it is used to create files and folders
// 2) uploadBytes: it is used to upload files
// 3) getDownloadURL: it is used to download image URL
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//this uuid library always give us unique id.
import { v4 as uuidv4 } from 'uuid';
// Initialize Firebase Storage.in which firebase storage refrence.
import { storage } from "../../config/firebase";





// Async thunk for creating a post to database
export const createPost = createAsyncThunk(
  'feed/createPost',
  async (postData) => {
    try {
      postData.setLoading(true)
      const file = postData.file
      console.log("file", file);
      
      const fileRef = ref(storage, "images/" + uuidv4() + file.name )
      const metadata = {
        contentType: file.type,
      }
      await uploadBytes(fileRef, file, metadata)
      const url = await getDownloadURL(fileRef)
      console.log("url", url);
      
      let updatedPost ={
        title: postData.title,
        description: postData.description,
        createAt: postData.createAt,
        // likes: 0,
        // comments: [],
        imageURL: url,
      }
      // console.log("post time testing", updatedPost.createdAt);
      

      const collectionRef = collection(db, "posts");
      const response = await addDoc(collectionRef, updatedPost);
      updatedPost = { ...updatedPost, id: response.id };
      postData.setLoading(false)
      return updatedPost;
     
    } catch (error) {
      console.error("Error:", error);
    }
    return postData
  }
);

// this code is Async thunk for fetching posts from database
export const getPosts = createAsyncThunk(
  'feed/fetchPosts',
  async () => {
    try {
      
      const collectionRef = collection(db, "posts");
      const queryRef = query(collectionRef, where("title", "!=", "post"),orderBy("title") , limit(5))
      // this is one time data read
      const docs = await getDocs(queryRef)
      let data = []
      docs.forEach((doc)=>{
        data.push({
          id: doc.id,
          ...doc.data()
        })
      });

      // this is real time data read
      // let data = []
      // onSnapshot(collectionRef,(querySnapshot)=>{
      //   querySnapshot.forEach((doc)=> {
      //     data = [...data,({id: doc.id, ...doc.data()})]
      //   });
      // })
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
);
// delete post from database
export const deletePost = createAsyncThunk(
  'feed/deletepost',
  async(id)=>{
     try {
      const docRef = doc(db, "posts", id)
      await deleteDoc(docRef);
      return id
     } catch (error) {
      console.log("Error", error);
      
     }
    
  }
);

// update post from database

export const updatePost = createAsyncThunk(
  "feed/updatePost",
  async(postData)=>{
    try {
      const docRef = doc(db, "posts", postData.id);
      await updateDoc(docRef, postData);
      return postData
     } catch (error) {
      console.log("Error", error);
      
     }
  }
)

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feed: [],
    updatePost: null,
    
  },
  reducers: {
    updateDocID: (state, action) => {
      let post = state.feed.filter((post)=> post.id === action.payload );
      state.updatePost = post[0]
      console.log("after filter state.updatePost", state.updatePost);
    }
  },


  extraReducers: (builder) => {
    // create post to firebase - not used in this example as we are creating data in firebase. If you are creating data in firebase, you would need to update the state as well.
    builder.addCase(createPost.fulfilled, (state, action) => {
        state.feed = [action.payload, ...state.feed]
      })
      // fetch data from firebase - not used in this example as we are fetching data from firebase. If you are fetching data from firebase, you would need to update the state as well.
      builder.addCase(getPosts.fulfilled, (state, action) => {
        state.feed = action.payload;
      });
      // delete data from store  - not used in this example as we are not deleting data from firebase. If you are deleting data from firebase, you would need to remove the post from the state as well.
      builder.addCase(deletePost.fulfilled, (state, action)=>{
        state.feed = state.feed.filter((post)=>post.id !== action.payload)
      })
      // update data in store
      builder.addCase(updatePost.fulfilled, (state, action) =>{
        state.feed = state.feed.map((postData)=>{
          
          if(postData.id === action.payload.id){
            return action.payload
          }
          return postData
        })
        state.updatePost = null
      })
      
  }
});
export const {updateDocID} = feedSlice.actions;
export default feedSlice.reducer;

