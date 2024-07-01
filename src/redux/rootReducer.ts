import { combineReducers } from '@reduxjs/toolkit';
import lessonSlice from './expense/lessonSlice';
import studentSlice from './expense/studentSlice';

const rootReducer = combineReducers({
    lesson: lessonSlice,
    student: studentSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
