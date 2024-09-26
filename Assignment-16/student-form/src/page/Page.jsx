import React,{useState} from 'react'

// import data from '../constant/data/Data'
import TableItem from '../components/tableItem/TableItem'
import AddStudent from '../components/addStudent/AddStudent'
import "./Page.css"
const Page = () => {

  const [data,setData]= useState([])
  const [editStudent, setEditStudent] = useState(null);
 



  const onClickHandler = (id)=>{ 
    let newdata=data.filter(item => item.id !== id)
    setData(newdata)
}



  const onAddHandler = (student)=>{
    if (editStudent) {
      const updateData = data.map((item) =>
      item.id === editStudent.id ? {...student, id : editStudent.id }: item);
      setData(updateData)
      setEditStudent(null)
    }else{
    setData([...data, {
      id: data.length + 1,
      name: student.name,
      fatherName: student.fatherName,
      age: student.age,
      email: student.email,
    }]);
  }
  };

  const onUpdateHandler = (student) => {
    setEditStudent(student)
  
  }
 

  

   
  return (

    <>
    <AddStudent onAddHandler={onAddHandler} editStudent={editStudent}/>
    <div className='table-box'>
      
      <table style={{border:'1px solid black'}}>
        <tr >
          
          <th style={{border:'1px solid black'}}>id</th>
          <th style={{border:'1px solid black'}}>Name</th>
          <th style={{border:'1px solid black'}}>FatherName</th>
          <th style={{border:'1px solid black'}}>Age</th>
          <th style={{border:'1px solid black'}}>Email</th>
          <th style={{border:'1px solid black'}}></th>
        </tr>
        {data.map((item)=>{
          return(
           <TableItem item={item} onClickHandler={onClickHandler} onUpdateHandler={onUpdateHandler}/>
          )

})}
      </table>
      
      
    </div>
    </>
  )
}

export default Page