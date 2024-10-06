import React from 'react'
import AddItems from "../../components/addItems/AddItems"
import { Link } from 'react-router-dom'
// import './Product.css'
const Productt = () => {
  return (
    <div >
        <h1 style={{marginTop: 0}}>Add new items</h1>
        <button style={{backgroundColor: "lightgray"}}><Link to="/">View products</Link></button>
        <AddItems />
    </div>
  )
}

export default Productt