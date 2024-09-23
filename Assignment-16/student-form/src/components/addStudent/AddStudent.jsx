import React,{useState, useEffect} from 'react'

const AddStudent = (props) => {
    const [name, setName]= useState('');
const [age, setAge]= useState('');
const [gender, setGender]= useState('');
  

    useEffect(()=>{
        if (props.editStudent) {
            setName(props.editStudent.name);
            setAge(props.editStudent.age);
            setGender(props.editStudent.gender);
        }
    },[props.editStudent])
    

   
    const onClickAddHandler = ()=>{
        // console.log(name);
        // console.log(age);
        // console.log(gender);
        let data ={
            name:name,
            age:age,
            gender:gender,
        }
        props.onAddHandler(data)
        setName('');
        setAge('');
        setGender('');   
    }
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter Your Name'/>
        <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age'/>
        <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder='Enter Your Gender'/> <br />
        <button onClick={onClickAddHandler}>{props.editStudent ? 'Update Student' : 'Add Student'}</button>
        
    </div>
  )
}

export default AddStudent