import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchProduct, deleteProduct } from '../../features/slices/productSlice';
const ProductList = () => {
    const dispatch = useDispatch()
    const product = useSelector((store)=> store.productSlice.products);
    // console.log("prdocuts in comp", product)
    useEffect(() => {
        if(product.length === 0){
            dispatch(fetchProduct())
            }
    }, [])

    const onClickDeleteHandler = (id)=> {
        dispatch(deleteProduct(id))
    }
  return (
    <>
       <div>
      {product.map(product=>{
        return <div key={product.id} style={{display: 'flex',flexDirection:'row'}}>
          <div style={{padding: 10}}>
            <img style={{height: '200px'}} src={product.image} alt={product.title} />
          </div>
          <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <button onClick={()=>onClickDeleteHandler(product.id)} style={{backgroundColor: 'lightgrey'}}>Delete</button>
          <hr />          
          </div>
        </div>
        
      })}
    </div>
    </>
  )
}

export default ProductList