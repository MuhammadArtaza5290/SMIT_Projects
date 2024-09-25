import React from 'react'

const TableItem = (props) => {
    
  return (
    <>
    <tr>
         <td  style={{border:'1px solid black'}}>{props.item.id}</td>
          <td style={{border:'1px solid black'}}>{props.item.name}</td>
          <td style={{border:'1px solid black'}}>{props.item.fatherName}</td>
          <td style={{border:'1px solid black'}}>{props.item.age}</td>
          <td style={{border:'1px solid black'}}>{props.item.email}</td>
          <button onClick={() => props.onUpdateHandler(props.item)} style={{backgroundColor:'lightgray'}}>Update</button>
          <button onClick={()=>props.onClickHandler(props.item.id)} style={{backgroundColor:'lightgray'}}>Delete</button>
          </tr>
    </>
  )
}

export default TableItem