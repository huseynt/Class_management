import { combineReducers } from '@reduxjs/toolkit';
import lessonSlice from './expense/lessonSlice';
import studentSlice from './expense/studentSlice';
import pointSlice from './expense/pointSlice';

const rootReducer = combineReducers({
    lesson: lessonSlice,
    student: studentSlice,
    point: pointSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
