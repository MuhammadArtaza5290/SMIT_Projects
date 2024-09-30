import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../feature/studentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});