import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../../components/productList/ProductList'
const Homee = () => {
  return (
    <div>
        <h1>Product List</h1>
        <button style={{backgroundColor: "lightgray"}}><Link to="/products">Add New Product</Link></button>
        <ProductList />
    </div>
  )
}

export default Homee