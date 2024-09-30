import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, setEditStudent } from '../../feature/studentSlice';
import './TableItem.css';

const TableItem = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleUpdate = (student) => {
    dispatch(setEditStudent(student));
  };

  return (
    <div className="table-box">
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{border:'1px solid black'}}>ID</th>
            <th style={{border:'1px solid black'}}>Name</th>
            <th style={{border:'1px solid black'}}>Father's Name</th>
            <th style={{border:'1px solid black'}}>Age</th>
            <th style={{border:'1px solid black'}}>Email</th>
            <th style={{border:'1px solid black'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className='td-background' style={{border:'1px solid black'}}>{student.id}</td>
              <td className='td-background' style={{border:'1px solid black'}}>{student.name}</td>
              <td className='td-background' style={{border:'1px solid black'}}>{student.fatherName}</td>
              <td className='td-background' style={{border:'1px solid black'}}>{student.age}</td>
              <td className='td-background' style={{border:'1px solid black'}}>{student.email}</td>
              <td className='td-background'>
                <button className='update-button' onClick={() => handleUpdate(student)}>Update</button>
                <button className='delete-button' onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;