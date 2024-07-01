import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
import { ILessonState } from "../../interface/interface"



const lessonSlice = createSlice({
    name: "lesson",
    initialState: <ILessonState>{
        lessons: []
    },
    reducers: {
        addLesson: (state, action) => {
            state.lessons.push(action.payload);
        },
        resetState: (state) => {
            state.lessons = [];
        },
        deleteStudent: (state, action) => {
            state.lessons = state.lessons.filter((lesson) => lesson.lessonName !== action.payload);
        }
    }
});

export default lessonSlice.reducer;
export const { addLesson, resetState, deleteStudent } = lessonSlice.actions;
