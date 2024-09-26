import React,{useState, useEffect} from 'react'
import * as yup from "yup"
import "./AddStudent.css"
const AddStudent = (props) => {
    const [name, setName]= useState('');
    const [fatherName, setFatherName]= useState('');
const [age, setAge]= useState('');
const [email, setEmail]= useState('');
const [error, setError] = useState({})
  

    useEffect(()=>{
        if (props.editStudent) {
            setName(props.editStudent.name);
            setFatherName(props.editStudent.fatherName);
            setAge(props.editStudent.age);
            setEmail(props.editStudent.email);
        }
    },[props.editStudent])
    
     //  Schema for error handling this function check and show error message
    const schema = yup.object().shape({
    name: yup.string("Name must be Alphabet").required("Enter your Name.").max(30,"Name must be of 30 characters."),
    fatherName: yup.string("Name must be Alphabet").required("Enter your FatherName.").max(30,"Name must be of 30 characters."),
    age: yup.number("Age must be numeric value").required("Enter your Age.").positive("Age must be positive numeric value."),
    email: yup.string("Enter a valid email").email("Invalid email address").required("Enter your Email.").max(50,"Email must be of 50 characters."),
    });
   
    const onClickAddHandler = async ()=>{
        // console.log(name);
        // console.log(age);
        // console.log(gender);
        let data ={
            name:name,
            fatherName: fatherName,
            age:age,
            email:email,
        }
            try {
              await schema.validate(data, { abortEarly: false });
              setError({});
              props.onAddHandler(data)
            } catch (err) {
                const validationErrors = {};
                err.inner.forEach((error) => {
                  validationErrors[error.path] = error.message;
                });
                setError(validationErrors); // Alag alag errors set karein
              
            }
          
        
        setName('');
        setFatherName('');
        setAge('');
        setEmail('');   
    }
  return (
    <div className="main-box">
    <div className='student-box'>
        <div className="heading"><p className='main-heading'>Student Registration Form</p></div>
        <div className="input-box">
            <label htmlFor="">Name :</label> <br />
        <input type="text" className='input-field' value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter Your Name'/> <br />
        {error && <p style={{color:"red"}}>{error.name}</p>} <br />
        <label htmlFor="">Father's Name :</label>  <br /> 
        <input type="text" className='input-field' value={fatherName} onChange={(e)=>setFatherName(e.target.value)}  placeholder='Enter Your FatherName'/> <br />
        {error && <p style={{color:"red"}}>{error.fatherName}</p>} <br />
        <label htmlFor="">Age:</label><br/>  
        <input type="text" className='input-field' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age'/> <br />
        {error && <p style={{color:"red"}}>{error.age}</p>} <br />
        <label htmlFor="">Email:</label>  <br />
        <input type="text" className='input-field' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/> <br />
        {error && <p style={{color:"red"}}>{error.email}</p>} <br />
        </div>
        <div className='btn-btn'><button className='student-btn' onClick={onClickAddHandler}>{props.editStudent ? 'Update Student' : 'Add Student'}</button> 
        </div>
    </div>
    </div>
  )
}

export default AddStudent