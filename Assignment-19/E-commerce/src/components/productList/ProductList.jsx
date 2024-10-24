import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, deleteProduct } from "../../features/slices/productSlice";
import Footer from "../footer/Footer";
// import { fetchProduct, deleteProduct } from '../../features/slices/productSlice';
import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productSlice.products);
  useEffect(() => {
    if (product.length === 0) {
      dispatch(fetchProduct());
    }
  }, []);

  const onClickDeleteHandler = (id)=> {
      dispatch(deleteProduct(id))
  }
  return (
    <>
      <div className="container">
  <div className="row">
    <div className="col-12 mb-5">
      <h1 className="display-6 fw-bolder text-center" style={{marginTop:20}}>Latest Products</h1>
      <hr />
    </div>
  </div>

  <div className="row">
    {product.map((product) => (
      <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
        <div className="cardd h-100 text-center p-4">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            height={250}
          />
          <div className="card-body">
            <h5 className="card-title">
              {product.title.substring(0, 12)}
            </h5>
            <h5 className="card-text">{product.price}</h5>
            <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
              Buy Now
            </Link>
            <button className="btn btn-outline-dark" onClick={(id) => onClickDeleteHandler(product.id)}>
              Delete
            </button>
            <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
              Update
            </Link>
          </div>
        </div>
      </div>
    ))}
    
  </div>
  
</div>
    </>
  );
};

export default ProductList;
