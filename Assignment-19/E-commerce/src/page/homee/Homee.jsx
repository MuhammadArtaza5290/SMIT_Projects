import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import HomeMaiin from '../../components/homeMaiin/HomeMaiin'
const Homee = () => {
  return (
    <div>
        <Navbar />
        <HomeMaiin />
        {/* <h1>Product List</h1>
        <button style={{backgroundColor: "lightgray"}}><Link to="/products">Add New Product</Link></button> */}
       
    </div>
  )
}

export default Homee