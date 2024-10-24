import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchProduct } from '../../features/slices/productSlice';
// import AddItems from "../../components/addItems/AddItems"
// import { Link } from 'react-router-dom'
// import './Product.css'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
const Productt = () => {
  const dispatch = useDispatch()
    const product = useSelector((store)=> store.productSlice.products);
    useEffect(() => {
        if(product.length === 0){
            dispatch(fetchProduct())
            }
    }, [])
  return (
    <div >
        {/* <h1 style={{marginTop: 0}}>Add new items</h1>
        <button style={{backgroundColor: "lightgray"}}><Link to="/">View products</Link></button>
        <AddItems /> */}
        <Navbar />
         <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            </div>
    <div className="row">
      {product.map(product=>{
        return <div className="col-md-3 mb-4">
          <div key={product.id} className="col-md-3 mb-4">
        <div className="card h-100 text-center p-4  " style={{width: '18rem'}}>
        <img src={product.image} className="card-img-top" alt={product.title} height={250}/>
        <div className="card-body">
          <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
          <h5 className="card-text lead fw-bold">{product.price}</h5>
          <a href="/" className="btn btn-outline-dark">Buy Now</a>
        </div>
      </div>
      </div>
        </div>
      })}
    </div>
    <Footer/>
    </div>
  )
}

export default Productt