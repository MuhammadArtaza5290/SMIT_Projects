import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { fetchProduct } from '../../features/slices/productSlice';
import { addToCart } from '../../features/slices/cartSlice';
import Navbar from '../navbar/Navbar';
function Product() {
  //dispatch use ho raha hai Redux actions ko dispatch karne ke liye.
    const dispatch = useDispatch()  
  // products Redux store se products ko get karta hai.
    const products = useSelector((store)=> store.productSlice.products);
  //
    const { id } = useParams();
    const[product, setProduct] = useState([]);
    useEffect(() => {
        if (products.length === 0) {
          dispatch(fetchProduct());
        } else {
          const foundProduct = products.find((item) => item.id === parseInt(id));
          setProduct(foundProduct);
        }
      }, [ products, id, dispatch]);

      const addToCartHandler = () => {
        dispatch(addToCart(product));
      }
    
    const showProduct = () =>{
        return(
            <>
            <Navbar/>
            <div className="col-md-6" style={{paddingTop: '40px'}}>
             <img src={product.image} alt="Product image" height={400} width={400} />
            </div>
            <div className="col-md-6" style={{paddingTop: '40px'}}>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>
                    {product.title}
                </h1>
                <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark' onClick={addToCartHandler}>Add to Cart</button>
                <button className='btn btn-dark px-4 py-2'>Go to Cart</button>
            </div>
         </>
        )
    }
  return (
    <>
     <div>
        <div className="container display-flex">
        <div className="row" >
        {product ? showProduct() : <p>Loading...</p>}
        </div>
        </div>

     </div>
    </>
  )
}

export default Product