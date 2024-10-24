import React from 'react'
import shopping from '../../assets/shopp.jpg'
// import Products from '../products/Products'
import ProductList from '../../components/productList/ProductList'
import './HomeMaiin.css'
import Footer from '../footer/Footer'

const HomeMaiin = () => {
  return (
    <>
    <div className="hero">
    <div className="card bg-dark text-white border-0">
    <img src={ shopping } className="card-img" alt="..." height="550px"/>
    <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
            <h5 className="card-title display-3 fw-bolder mb=0">New Season Arrivals</h5>
            <p className="card-text lead fs-2">
                Checkout All The Trends
            </p>
        </div>
    
    </div>
    </div>
    {/* <Products/> */}
    <ProductList />
    <Footer />
    </div>
    </>
  )
}

export default HomeMaiin