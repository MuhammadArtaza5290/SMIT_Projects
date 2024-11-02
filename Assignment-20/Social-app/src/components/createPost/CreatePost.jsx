import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../app/slices/feedSlice";
import moment from 'moment';


function CreatePost() {
  // add post states
  const dispatch = useDispatch();
  const post = useSelector((store) => store.feedSlice.updatePost);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  //  A function that handle post data and sand to post slice.
  //  console.log("post data", post);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
    }else{
      setTitle("");
      setDescription("");
    }
  }, [post]);

  const createPostHandler = () => {
    let postData = {
      title,
      description,
      createAt: moment().format('MMMM Do YYYY, h:mm a'),
      imageURL,
    };
    
    // console.log("this is create post comp data for time", postData.createAt);
    if (post) {
      dispatch(updatePost({ ...postData, id: post.id }));
      return
    } else{
      dispatch(createPost({...postData, file, setLoading}));
    }
      
    
  };

   const changeImage =(e)=>{
    const file = e.target.files[0];
    setFile(file);
   }

  // const uploadImage = async (e) => {
  //   try {
      // get the selected image file from input field.  // e.target.files[0]: it contains the selected file.  // we are getting the first file from the array.  // file: contains the image file.  // file.name: it contains the name of the file.
      // const file = e.target.files[0];
      // console.log("file", file);
      // in fileRef 
      //1) storage: firebase contain a lot of storage to store files. storage contain refrence of our firebase storage.
      //2) images/: images name folder create in firebase storage.
      //3) uuidv4(): it is used to generate a unique id. its use is if one user create file in fbase storage . it is quite possible that more than 1 user create file with same name. uuid is id that uniqualy identify each file.
      // 4) file.name: it is the name of the file.
      // const fileRef = ref(storage, "images/"+ uuidv4() + file.name);
      // const metadata = {
      //   contentType: file.type,
      // };

      // in uploadBytes 
      // 1)fileRef: it contain storage refrence, folder in which we store our image, and file name.
      // 2)file: it contain the image file.
      // 3)metadata: it contain the metadata of the file.  // in this case, it is content type of image as 'image/jpeg'.  // contentType: "image/jpeg",

      // const response = await uploadBytes(fileRef, file, metadata);
      // console.log("image file response", response);

      // get the download URL of the uploaded file.  // await is used here to wait for the response.
  //     const url = await getDownloadURL(fileRef);
  //     console.log("url of image", url);
  //     setImageURL(url)
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  return (
    <div>
      <input
        value={title}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      
      <input
        value={description}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <input type="file" onChange={changeImage} /> <br />
      {loading ? <h2>Loading...</h2>:
      <button onClick={createPostHandler}>
        {post ? "Update Post" : "Create Post"}
      </button>}
    </div>
  );
}

export default CreatePost;
