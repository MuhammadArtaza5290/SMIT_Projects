import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  editStudent: null,
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push({
        id: state.students.length + 1,
        ...action.payload,
      });
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((student) => student.id !== action.payload);
    },
    setEditStudent: (state, action) => {
      state.editStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex((student) => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
      state.editStudent = null;
    },
  },
});

export const { addStudent, deleteStudent, setEditStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;