// import { useState } from 'react'
import style from './App.module.css'
import Student from './components/Student/Student'
import Class from './components/Point/Class'
import ClassItem from './components/Point/ClassItem'
import StudentItem from './components/Student/StudentItem'
import { useSelector } from 'react-redux'
import { IStudent, ILesson } from './interface/interface'

function App() {

  const studentList: IStudent[] = useSelector((state: any) => state.student.students);
  const lessonList: ILesson[] = useSelector((state: any) => state.lesson.lessons);


  return (
    <div className={style.app}>
    <h2 style={{textAlign: "center", fontSize: "25px"}}>Class Management System</h2>
    <div className={style.upForm}>
      <Student/>
      <Class/>
    </div>

    <div className={style.tables}>
      <table className={style.table}>
        <tr>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Student Surname</th>
          <th>Class Number</th>
        </tr>
        {studentList.map((student, index) => {
          return <StudentItem 
          key={index} 
          firstname={student.firstname}
          surname={student.surname}
          studentNumber={student.studentNumber} 
          classNumber={student.classNumber}/>
        })}
      </table>

      <table className={style.table}>
        <tr>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Student Surname</th>
          <th>Class Number</th>
        </tr>
        {lessonList.map((lesson, index) => {
          return <ClassItem 
          key={index}
          lessonName={lesson.lessonName}
          teacherName={lesson.teacherName}
          teacherNumber={lesson.teacherNumber}
          classNumber={lesson.classNumber}
          />
        })}
      </table>
    </div>


    </div>
  )
}

export default App
