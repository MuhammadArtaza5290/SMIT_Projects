import React, {useState} from 'react'
import { addProduct } from '../../features/slices/productSlice'
import { useDispatch } from 'react-redux'
const AddItems = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
       let product ={
        title,
        price,
        description,
        category
       }
       dispatch(addProduct(product))
    }

  return (
    <div>
        
        <form>
        <input type="text" placeholder="title" onChange={(e)=> setTitle(e.target.value)} /> <br />
            <input type="text" placeholder="price" onChange={(e)=> setPrice(e.target.value)}  /> <br />
            <input type="text" placeholder="description" onChange={(e)=> setDescription(e.target.value)} /> <br />
            <input type="text" placeholder="category" onChange={(e)=> setCategory(e.target.value)} /> <br />
          <button onClick={handleSubmit} style={{backgroundColor: "lightgray"}} type="submit">Add to cart</button>
        </form>
  
    </div>
  )
}

export default AddItems