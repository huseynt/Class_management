// ---------------- Import style ---------------------
import style from "./pointItem.module.css";
// -------------------- Import Hooks ---------------------
import { useState, useEffect } from "react";
// -------------------- Import Interface ---------------------
import { INewPoint } from "../../interface/interface";
// -------------------- Import Redux ---------------------
import { useDispatch } from "react-redux";
import { changePoint, deletePoint } from "../../redux/slice/pointSlice";


const PointItem = (props: INewPoint) => {
  // ------------------------- Dispatch -----------------------------
  const dispatch = useDispatch();
  // ------------------------- useState / Props -----------------------------
  const { id, studentName, teacherName, lessonName, lessonClassNumber, dateTime, score } = props;
  const [edit, setEdit] = useState(false);
  const [newPoint, setNewPoint] = useState({
    id: id,
    studentName: studentName,
    teacherName: teacherName,
    lessonName: lessonName,
    lessonClassNumber: lessonClassNumber,
    dateTime: dateTime,
    score: score,
  });
  // ------------------------- Change Function -----------------------------
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setNewPoint({
        ...newPoint,
        [e.target.name]: e.target.value,
      });
    }
  };
  // ------------------------- Edit Function -----------------------------
  const editSubmit = () => {
    if (edit) {
      dispatch(
        changePoint({
          id: newPoint.id,
          studentName: newPoint.studentName,
          teacherName: newPoint.teacherName,
          lessonName: newPoint.lessonName,
          lessonClassNumber: newPoint.lessonClassNumber,
          dateTime: newPoint.dateTime,
          score: newPoint.score,
        })
      );
    }
    setEdit(!edit);
  };
  // ------------------------- Delete Function -----------------------------
  const deleteItem = () => {
    dispatch(
      deletePoint({
        id: newPoint.id,
        studentName: newPoint.studentName,
        teacherName: newPoint.teacherName,
        lessonName: newPoint.lessonName,
        lessonClassNumber: newPoint.lessonClassNumber,
        dateTime: newPoint.dateTime,
        score: newPoint.score,
      })
    );
  };
  // ------------------------- useEffect -----------------------------
  useEffect(() => {
    setNewPoint({
      id: id,
      studentName: studentName,
      teacherName: teacherName,
      lessonName: lessonName,
      lessonClassNumber: lessonClassNumber,
      dateTime: dateTime,
      score: score,
    });
  }, [
    id,
    studentName,
    teacherName,
    lessonName,
    lessonClassNumber,
    score,
    dateTime,
  ]);

  return (
    <tr className={style.tr}>
      <td>
        <input
          type="text"
          name="studentName"
          value={newPoint.studentName}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="teacherName"
          value={newPoint.teacherName}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="lessonName"
          value={newPoint.lessonName}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="lessonClassNumber"
          value={newPoint.lessonClassNumber}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="dateTime"
          value={newPoint.dateTime}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="number"
          name="score"
          value={newPoint.score}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
          max={100}
          min={0}
        />
      </td>

      <td
        style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
        onClick={editSubmit}
        className={style.edit}
      >
        {!edit ? "Edit" : "Submit"}
      </td>
      <td
        onClick={deleteItem}
        className={style.delete}
      >
        X
      </td>
    </tr>
  );
};

export default PointItem;