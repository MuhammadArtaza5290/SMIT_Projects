import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, getPosts, updateDocID } from '../../app/slices/feedSlice';

function FeedListing() {
  const dispatch = useDispatch();
  //useSelector hook ka istemal karte hain, to yeh Redux store ke state se wo specific data fetch karta hai jo humne specify kiya hai.
  const feedList = useSelector((store) => store.feedSlice.feed);
  // console.log("time testing", feedList);
  
   useEffect(() => {
     dispatch(getPosts())
   }, [])
   
  // fetch books
  const handleDelete = (id)=>{
    dispatch(deletePost(id));
  }
  
  const handleEdit = (id) => {
    console.log("this is my handle edit", dispatch(updateDocID(id)));
    
  }
  
   
  return (
    <>
    <div>
      <h1>FeedListing</h1>
     
      {feedList?.map((post)=>{
        return (
          <div key={post?.id}>
          <img src={post?.imageURL} style={{width: '350px', height: '300px'}}  alt="post" />
          <h2>{post?.title}</h2>
          <h3>{post?.createAt}</h3>
          <p>{post?.description}</p>
          <button onClick={()=>handleDelete(post.id)}>delete</button>
          <button onClick={()=> handleEdit(post.id)}>edit</button>
          <hr />
        </div>
        )
      }
      )}
     </div>
     </>
  )
}

export default FeedListing

