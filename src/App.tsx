// ------------------------------ Import Style ------------------------------------
import style from "./App.module.css";
// ------------------------------ Import Components ---------------------------------
import Student from "./components/Student/Student";
import Class from "./components/Class/Class";
import ClassItem from "./components/Class/ClassItem";
import StudentItem from "./components/Student/StudentItem";
import PointItem from "./components/Point/PointItem";
import Point from "./components/Point/Point";
// ------------------------------ Import Redux / Interface ----------------------------------
import { useSelector } from "react-redux";
import { INewStudent, INewPoint, INewLesson } from "./interface/interface";
import { RootState } from "./redux/rootReducer";


function App() {
  // ------------------------------ useSelector ------------------------------------
  const studentList: INewStudent[] = useSelector(
    (state: RootState) => state.student.students
  );
  const lessonList: INewLesson[] = useSelector(
    (state: RootState) => state.lesson.lessons
  );
  const pointList: INewPoint[] = useSelector(
    (state: RootState) => state.point.points
  );

  return (
    <div className={style.app}>
      <h2 className={style.head}>Class Management System</h2>

      {/* Student and Class Form */}
      <div className={style.upForm}>
        <Student />
        <Class />
      </div>

      <div className={style.tables}>
        
        {/* Student and Class Table */}
        <table className={style.table}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Student Surname</th>
              <th>Class Number</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => {
              return (
                <StudentItem
                  key={index}
                  id={student.id}
                  firstname={student.firstname}
                  surname={student.surname}
                  studentNumber={student.studentNumber}
                  classNumber={student.classNumber}
                />
              );
            })}
          </tbody>
        </table>

        {/* Lesson Table */}
        <table className={style.table}>
          <thead>
            <tr>
              <th>Lesson</th>
              <th>Teacher Name</th>
              <th>Teacher Number</th>
              <th>Class Number</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lessonList.map((lesson, index) => {
              return (
                <ClassItem
                  key={index}
                  id={lesson.id}
                  lessonName={lesson.lessonName}
                  teacherName={lesson.teacherName}
                  teacherNumber={lesson.teacherNumber}
                  classNumber={lesson.classNumber}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Point Form */}
      <Point />

      {/* Point Table */}
      <div className={style.tablePointBlock}>
        <table className={style.tablePoint}>
          <thead>
            <tr>
              <th>Student</th>
              <th>Lesson</th>
              <th>Teacher</th>
              <th>Class Number</th>
              <th>Date time</th>
              <th>Score</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pointList.map((point, index) => {
              return (
                <PointItem
                  key={index}
                  id={point.id}
                  studentName={point.studentName}
                  teacherName={point.teacherName}
                  lessonName={point.lessonName}
                  lessonClassNumber={point.lessonClassNumber}
                  dateTime={point.dateTime}
                  score={point.score}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;