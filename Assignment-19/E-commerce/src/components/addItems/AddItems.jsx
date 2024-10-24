import react,{useState} from 'react'
import { addProduct } from '../../features/slices/productSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import "./AddItems.css"
const AddItems = () => {
    const [image, setImage] = useState([])
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
       e.preventDefault(); // prevent page refresh on form submission
       let product ={
        image,
        title,
        price,
        description,
        category
       };
      //  console.log("This is our product", product);
       dispatch(addProduct(product));
       setImage("");
       setTitle("");
       setPrice("");
       setDescription("");
       setCategory("");
    }
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setImage(reader.result);  // Set base64 image to the state
          };
          reader.readAsDataURL(file);  // Convert image to base64
      }
  };

       
  return (
        <div className="add-product-container">
            <h1 className="add-product-title">Add Product</h1>
            <Link to="/" className="btn btn-outline-dark">Home</Link> <br />
            <form className="product-form" onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageUpload} className="form-input" />
                {image && (
                    <div className="image-preview">
                        <img src={image} alt="Product" />
                    </div>
                )}
                <input type="text" placeholder="Title" value={title} className="form-input" onChange={(e) => setTitle(e.target.value)} /> <br />
                <input type="text" placeholder="Price" value={price} className="form-input" onChange={(e) => setPrice(e.target.value)} /> <br />
                <input type="text" placeholder="Description" value={description} className="form-input" onChange={(e) => setDescription(e.target.value)} /> <br />
                <input type="text" placeholder="Category" value={category} className="form-input" onChange={(e) => setCategory(e.target.value)} /> <br />
                <button type="submit" value={image} className="btn btn-outline-dark">Add to Cart</button>
            </form>
        </div>
  )
}

export default AddItems