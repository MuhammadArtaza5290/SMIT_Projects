import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent, updateStudent } from '../../feature/studentSlice';
import * as yup from 'yup';
import "./AddStudent.css"

const AddStudent = () => {
  const dispatch = useDispatch();
  const editStudent = useSelector((state) => state.students.editStudent);

  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setFatherName(editStudent.fatherName);
      setAge(editStudent.age);
      setEmail(editStudent.email);
    }
  }, [editStudent]);

  const schema = yup.object().shape({
    name: yup.string().required("Enter your Name").max(30),
    fatherName: yup.string().required("Enter your FatherName").max(30),
    age: yup.number().required("Enter your Age").positive(),
    email: yup.string().email("Invalid email").required("Enter your Email").max(50),
  });

  const onClickAddHandler = async () => {
    let studentData = { name, fatherName, age, email };
    try {
      await schema.validate(studentData, { abortEarly: false });
      setError({});
      if (editStudent) {
        dispatch(updateStudent({ ...editStudent, name, fatherName, age, email }));
      } else {
        dispatch(addStudent(studentData));
      }
      setName('');
      setFatherName('');
      setAge('');
      setEmail('');
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setError(validationErrors);
    }
  };

  return (
    <div className="main-box">
      <div className="student-box">
        <p className="main-heading">Student Registration Form</p>
        <div className="input-box">
          <label>Name:</label> <br />
          <input
            type="text"
            value={name}
            className='input-field'
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          /> <br />
          {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
          <label>Father's Name:</label> <br />
          <input
            type="text"
            value={fatherName}
            className='input-field'
            onChange={(e) => setFatherName(e.target.value)}
            placeholder="Enter Your FatherName"
          /> <br />
          {error.fatherName && <p style={{ color: 'red' }}>{error.fatherName}</p>}
          <label>Age:</label> <br />
          <input
            type="text"
            value={age}
            className='input-field'
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Your Age"
          /> <br />
          {error.age && <p style={{ color: 'red' }}>{error.age}</p>}
          <label>Email:</label> <br />
          <input
            type="text"
            value={email}
            className='input-field'
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          /> <br />
          {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        </div>
        <button className='student-btn' onClick={onClickAddHandler}>
          {editStudent ? 'Update Student' : 'Add Student'}
        </button>
      </div>
    </div>
  );
};

export default AddStudent;