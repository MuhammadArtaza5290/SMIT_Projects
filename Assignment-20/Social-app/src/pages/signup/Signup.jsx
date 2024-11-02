import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { signup } from '../../app/slices/authSlice';
const Signup = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');

    const handleSignUp = ()=>{
        let user ={
            email,
            password,
            name,
            phone,
            address,
            gender
        }
        // console.log("signup clicked", user);
        dispatch(signup(user));
    }

  return (
    <>
    <div>
        <h1>Signup</h1>
        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword( e.target.value)}/><br />
          <input type="text" placeholder="Name" onChange={(e)=>setName( e.target.value)}/><br />
          <input type="text" placeholder="Phone" onChange={(e)=>setPhone( e.target.value)}/><br />
          <input type="text" placeholder="Address" onChange={(e)=>setAddress( e.target.value)}/><br />
          <label htmlFor="">Male</label>
          <input type="radio" name='gender' value="male" onChange={()=>setGender("male")}/><br />
          <label htmlFor="">Female</label>
          <input type="radio" name='gender' value="female" onChange={()=>setAddress("female")}/><br />
          
          <button onClick={handleSignUp}>Signup</button>

    </div>
    </>
  )
}

export default Signup