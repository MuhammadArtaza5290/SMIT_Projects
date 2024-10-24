import React from 'react'
import "./Cart.css"
import { increment, decrement } from '../../features/slices/cartSlice';
import { useSelector,useDispatch } from 'react-redux'
function Cart() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((store)=> store.cartSlice.cartItems)
  const incrementHandler =(id)=>{
    dispatch(increment(id));
  }
  const decrementHandler =(id)=>{
    dispatch(decrement(id));
  }
  return (
    <>
    <div className='container-fluid'>
      <div className="row">
      <h2 style={{marginTop: 20}}>Cart Products</h2>
      </div>
       {cartProduct.length > 0 ? (
        <div className="cartContainer">
        {cartProduct.map((product) => (
          <div key={product.id} className="cartStyle">
            <img src={product.image} alt={product.title} style={{height: 100}} />
            <h3>{product.title.substring(0, 20)}</h3>
            {/* quantity section */}
            <div className='quantity'>
              <button className='qnty-btn' onClick={() =>decrementHandler(product.id)}><i className='fa fa-minus me-1'></i></button>
              <div className='qnty'><h5 className='sec' >{product.quantity}</h5></div>
              <button className='qnty-btn' onClick={()=>incrementHandler(product.id)}><i className='fa fa-plus me-1'></i></button>            </div>
            <h4>Price: ${(product.price * product.quantity)} </h4>
          </div>
        ))}
      </div>
      ): ( <h3>Your cart is empty</h3> )}
  
    </div>
    </>
    
  )
}

export default Cart