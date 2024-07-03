import { combineReducers } from '@reduxjs/toolkit';
import lessonSlice from './slice/lessonSlice';
import studentSlice from './slice/studentSlice';
import pointSlice from './slice/pointSlice';

const rootReducer = combineReducers({
    lesson: lessonSlice,
    student: studentSlice,
    point: pointSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
