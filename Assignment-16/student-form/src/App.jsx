import { useState } from 'react'
// import * as Yup from "yup"
import Page from "../src/page/Page"

function App() {
  // const [name, setName] = useState("")
  // const [error, setError] = useState("")

  // const validationSchema =  Yup.string().matches(/^[A-Za-z\s]+$/, "Name must be alphabetic").required("Name is required")
  

  // const clickHandler = async (e)=> {
  //   e.preventDefault();
  //   try {
  //     await validationSchema.validate( name );
  //     setError(""); // Clear any previous errors
  //     console.log({name});
  //     // alert("Your name is:", name)
      
  //   } catch (err) {
  //      // If validation fails, set the error message
  //     setError(err.errors[0])
  //   }

  // }

  return (
    <>

    <Page />
    {/* <form onSubmit={clickHandler}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      {error && <p style={{color:"red"}}>{error}</p>} <br />
      <button type="submit">Submit</button>
    </form> */}
    </>
  )
}

export default App
