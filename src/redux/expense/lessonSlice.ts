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
        deleteLesson: (state, action) => {
            state.lessons = state.lessons.filter((lesson) => lesson.id !== action.payload.id);
        },
        changeLesson: (state, action) => {
            const {id,lessonName, teacherName, teacherNumber, classNumber} = action.payload;
            const point = state.lessons.find((p) => p.id == id);
            if (point) {
                point.lessonName = lessonName;
                point.teacherName = teacherName;
                point.teacherNumber = teacherNumber;
                point.classNumber = classNumber;
            }
        }
    }
});

export default lessonSlice.reducer;
export const { addLesson, resetState, changeLesson, deleteLesson} = lessonSlice.actions;
