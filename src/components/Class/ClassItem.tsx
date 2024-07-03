// ---------------- Import style ---------------------
import style from "./classItem.module.css"
// -------------------- Import Hooks ---------------------
import { useState, useEffect } from "react"
// -------------------- Import Interface ---------------------
import { INewLesson } from "../../interface/interface"
// -------------------- Import Redux ---------------------
import { useDispatch } from "react-redux"
import { deleteLesson, changeLesson} from "../../redux/slice/lessonSlice"


const ClassItem = (props:INewLesson) => {

  // ------------------------- Dispatch -----------------------------
  const dispatch = useDispatch();
  // ------------------------- useState / Props -----------------------------
  const { id, lessonName, teacherName, teacherNumber, classNumber} = props;
  const [edit, setEdit] = useState(false);
  const [newLesson, setNewLesson] = useState({
    id: id,
    lessonName: lessonName,
    teacherName: teacherName,
    teacherNumber: teacherNumber,
    classNumber: classNumber
  });

  // ------------------------- Change Function -----------------------------
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setNewLesson({
        ...newLesson,
        [e.target.name]: e.target.value,
      });
    }
  };

  // ------------------------- Edit Function -----------------------------
  const editSubmit = () => {
    if (edit) {
      dispatch(
        changeLesson({
          id: newLesson.id,
          lessonName: newLesson.lessonName,
          surname: newLesson.teacherName,
          studentNumber: newLesson.teacherNumber,
          classNumber: newLesson.classNumber
        })
      );
    }
    setEdit(!edit);
  };

  // ------------------------- Delete Function -----------------------------
  const deleteItem = () => {
    dispatch(
      deleteLesson({
        id: newLesson.id,
        lessonName: newLesson.lessonName,
        surname: newLesson.teacherName,
        studentNumber: newLesson.teacherNumber,
        classNumber: newLesson.classNumber
      })
    );
  };

  // ------------------------- useEffect -----------------------------
  useEffect(() => {
    setNewLesson({
      id: id,
      lessonName: lessonName,
      teacherName: teacherName,
      teacherNumber: teacherNumber,
      classNumber: classNumber
    });
  }, [
    id,
    lessonName,
    teacherName,
    teacherNumber,
    classNumber
  ]);


  return (
    <tr className={style.tr}>
      <td>
        <input
          type="text"
          name="lessonName"
          value={newLesson.lessonName}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="teacherName"
          value={newLesson.teacherName}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="teacherNumber"
          value={newLesson.teacherNumber}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="classNumber"
          value={newLesson.classNumber}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
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
  )
}

export default ClassItem