import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
import { IPointState } from "../../interface/interface"



const pointSlice = createSlice({
    name: "point",
    initialState: <IPointState>{
        points: []
    },
    reducers: {
        addPoint: (state, action) => {
            state.points.push(action.payload);
        },
        resetState: (state) => {
            state.points = [];
        },
        deletePoint: (state, action) => {
            state.points = state.points.filter((point) => point.id !== action.payload.id);
        },
        changePoint : (state, action) => {
            const {id, studentName, teacherName, lessonClassNumber, dateTime, score} = action.payload;
            const point = state.points.find((p) => p.id == id);
            if (point) {
                point.studentName = studentName;
                point.teacherName = teacherName;
                point.lessonClassNumber = lessonClassNumber;
                point.dateTime = dateTime;
                point.score = score;
            }
        }
    }
});

export default pointSlice.reducer;
export const { addPoint, resetState, deletePoint, changePoint } = pointSlice.actions;
