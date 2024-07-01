import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
import { IstudentState } from "../../interface/interface" 



const studentSlice = createSlice({
    name: "student",
    initialState: <IstudentState>{
        students: []
    },
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        resetState: (state) => {
            state.students = [];
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter((student) => student.studentNumber !== action.payload);
        }
    }
});

export default studentSlice.reducer;
export const { addStudent, resetState, deleteStudent } = studentSlice.actions;
