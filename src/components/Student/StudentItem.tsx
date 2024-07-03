// ---------------- Import style ---------------------
import style from "../Student/student_item.module.css"
// -------------------- Import Hooks ---------------------
import { useState, useEffect } from "react"
// -------------------- Import Interface ---------------------
import { INewStudent } from "../../interface/interface"
// -------------------- Import Redux ---------------------
import { useDispatch } from "react-redux"
import { changeStudent, deleteStudent} from "../../redux/slice/studentSlice"


const StudentItem = (props:INewStudent) => {
  // ------------------------- Dispatch -----------------------------
  const dispatch = useDispatch();
  // ------------------------- useState / Props -----------------------------
  const { id, firstname, surname, studentNumber, classNumber} = props;
  const [edit, setEdit] = useState(false);
  const [newStudent, setNewStudent] = useState({
    id: id,
    firstname: firstname,
    surname: surname,
    studentNumber: studentNumber,
    classNumber: classNumber
  });
  // ------------------------- Change Function -----------------------------
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setNewStudent({
        ...newStudent,
        [e.target.name]: e.target.value,
      });
    }
  };
  // ------------------------- Edit Function -----------------------------
  const editSubmit = () => {
    if (edit) {
      dispatch(
        changeStudent({
          id: newStudent.id,
          firstname: newStudent.firstname,
          surname: newStudent.surname,
          studentNumber: newStudent.studentNumber,
          classNumber: newStudent.classNumber
        })
      );
    }
    setEdit(!edit);
  };
  // ------------------------- Delete Function -----------------------------
  const deleteItem = () => {
    dispatch(
      deleteStudent({
        id: newStudent.id
      })
    );
  };
  // ------------------------- useEffect -----------------------------
  useEffect(() => {
    setNewStudent({
      id: id,
      firstname: firstname,
      surname: surname,
      studentNumber: studentNumber,
      classNumber: classNumber
    });
  }, [
    id,
    firstname,
    surname,
    studentNumber,
    classNumber
  ]);

  return (
    <tr className={style.tr}>
      <td>
        <input
          type="text"
          name="studentNumber"
          value={newStudent.studentNumber}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="firstname"
          value={newStudent.firstname}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="surname"
          value={newStudent.surname}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="classNumber"
          value={newStudent.classNumber}
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

export default StudentItem;