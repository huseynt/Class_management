import style from "./class.module.css"
import { ILesson } from "../../interface/interface"

const StudentItem = (props:ILesson) => {


  const {lessonName, teacherName, teacherNumber, classNumber} = props;

  return (
    <tr className={style.tr}>
      <td>{lessonName}</td>
      <td>{teacherName}</td>
      <td>{teacherNumber}</td>
      <td>{classNumber}</td>
    </tr>
  )
}

export default StudentItem
