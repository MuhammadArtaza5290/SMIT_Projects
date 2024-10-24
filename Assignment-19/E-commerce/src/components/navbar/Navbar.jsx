import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="#">LA COLLECTION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  aria-current="page" href="#"><Link to='/' className="nav-link active text-decoration-none" >Home</Link></a>
        </li>
        <li className="nav-item">
          <a  href="#"><Link to='/products' className="nav-link">Products</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
     <div className="buttons" id="myNavbar">
            <Link to="/addItems" className="btn btn-outline-dark">
                <i className='fa fa-plus me-1'></i>Add Product</Link>
            <a href="" className="btn btn-outline-dark ms-2">
                <i className='fa fa-sign-in me-1'></i>Login</a>
            <a href="" className="btn btn-outline-dark ms-2">
                <i className='fa fa-user-plus me-1 '></i>Register</a>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className='fa fa-shopping-cart me-1 '></i>Cart (0)</Link>
     </div>
    </div>
  </div>
</nav>
   
    </>
  )
}

export default Navbar


 