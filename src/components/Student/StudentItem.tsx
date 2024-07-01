import style from "./StudentItem.module.css"
import { IStudent } from "../../interface/interface"

const StudentItem = (props:IStudent) => {

  const {firstname, surname, studentNumber, classNumber} = props;

  return (
    <tr className={style.tr}>
      <td>{studentNumber}</td>
      <td>{firstname}</td>
      <td>{surname}</td>
      <td>{classNumber}</td>
    </tr>
  )
}

export default StudentItem
