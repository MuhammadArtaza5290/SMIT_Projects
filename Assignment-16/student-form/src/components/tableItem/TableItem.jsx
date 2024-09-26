import React from 'react'
import "./TableItem.css"
const TableItem = (props) => {
    
  return (
    <>
    <tr>
         <td className='td-background' style={{border:'1px solid black'}}>{props.item.id}</td>
          <td className='td-background' style={{border:'1px solid black'}}>{props.item.name}</td>
          <td className='td-background' style={{border:'1px solid black'}}>{props.item.fatherName}</td>
          <td className='td-background' style={{border:'1px solid black'}}>{props.item.age}</td>
          <td className='td-background' style={{border:'1px solid black'}}>{props.item.email}</td>
          <td className='td-background' style={{border:'1px solid black', textAlign: 'center'}}>
          <button className='update-button' onClick={() => props.onUpdateHandler(props.item)} >Update</button>
          <button className='delete-button' onClick={()=>props.onClickHandler(props.item.id)} >Delete</button></td>
          
          </tr>
    </>
  )
}

export default TableItem