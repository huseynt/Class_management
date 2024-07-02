import style from "./studentItem.module.css"
import { INewStudent } from "../../interface/interface"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeStudent, deleteStudent} from "../../redux/expense/studentSlice"

const StudentItem = (props:INewStudent) => {
  const { id, firstname, surname, studentNumber, classNumber} = props;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newStudent, setNewStudent] = useState({
    id: id,
    firstname: firstname,
    surname: surname,
    studentNumber: studentNumber,
    classNumber: classNumber
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setNewStudent({
        ...newStudent,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Edit or Submit
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


  const deleteItem = () => {
    dispatch(
      deleteStudent({
        id: newStudent.id
      })
    );
  };

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

export default StudentItem
