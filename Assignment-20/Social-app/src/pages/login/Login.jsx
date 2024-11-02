import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../app/slices/authSlice';
function Login() {
  const dispatch = useDispatch()
  const [email, setEmai] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    let user ={
      email,
      password,
    }
    dispatch(login(user))
  }

  return (
    <>
    <div>
      <h1>Login</h1>
      
        <label>Username:</label><br />
          <input type="text" name="email" placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)} /><br />
        <label>Password:</label><br />
          <input type="password" name="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)} /><br />
        <button onClick={handleLogin}>Login</button>
    </div>
    </>
  )
}

export default Login