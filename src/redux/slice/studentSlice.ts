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
            state.students = state.students.filter((student) => student.id !== action.payload.id);
        },
        changeStudent : (state, action) => {
            const {id, firstname, surname, studentNumber, classNumber} = action.payload;
            const point = state.students.find((p) => p.id == id);
            if (point) {
                point.firstname = firstname;
                point.surname = surname;
                point.studentNumber = studentNumber;
                point.classNumber = classNumber;
            }
        }
    }
});

export default studentSlice.reducer;
export const { addStudent, resetState, deleteStudent, changeStudent } = studentSlice.actions;
