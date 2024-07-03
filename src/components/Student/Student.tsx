// ---------------- Import style ---------------------
import style from './student.module.css'
// -------------------- Import Hooks ---------------------
import { useState } from 'react'
// -------------------- Import Interface ---------------------
import { IStudent } from '../../interface/interface'
// -------------------- Import Redux ---------------------
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../../redux/slice/studentSlice'
import { RootState } from '../../redux/rootReducer'


const Student = () => {
    // ------------------------- Dispatch -----------------------------
    const dispatch = useDispatch();
    // ------------------------- useSelector -----------------------------
    const studentList: IStudent[] = useSelector((state: RootState) => state.student.students);
    // ------------------------- useState -----------------------------
    const [check, setCheck] = useState<number>(0)
    const [student,setStudent] = useState<IStudent>({
        firstname: "",
        surname: "",
        studentNumber: "",
        classNumber: ""
    })
    // ------------------------- Submit Function -----------------------------
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if ( studentList.find((student) => 
            student.studentNumber === form.studentNumber.value) || 
            form.firstname.value === "" || 
            form.surname.value === "" || 
            form.studentNumber.value === "" || 
            form.classNumber.value === "") {
            setCheck(-1)
            resetForm()
        }  else {
            setStudent({
                firstname: form.firstname.value,
                surname: form.surname.value,
                studentNumber: form.studentNumber.value,
                classNumber: form.classNumber.value
            })
            dispatch(addStudent({ 
                id: student.studentNumber,
                ...student
            }))
            setCheck(1)
            resetForm()
        }
    }
    // ------------------------- Change Function -----------------------------
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    // ------------------------- Reset Function -----------------------------
    const resetForm = () => {
        setTimeout(() => {
            setStudent({
                firstname: "",
                surname: "",
                studentNumber: "",
                classNumber: ""
            })
            setCheck(0)
        },1000)
    }
    

  return (
      <div className={style.student} id='studentForm'>
        <h2 style={{textAlign: "center"}}>Student Form</h2>
        <form className={style.studentForm} onSubmit={submit}>
            <div>
                <label htmlFor="studentName">Student Name</label>
                <input type="text" placeholder="Enter name" name="firstname" id="studentName" onChange={change} value={student.firstname}/>
            </div>

            <div>
                <label htmlFor="studentSurname">Student Surrname</label>
                <input type="text" placeholder="Enter surname" name="surname" id="studentSurname" onChange={change} value={student.surname}/>
            </div>

            <div>
                <label htmlFor="studentNumber">Student ID</label>
                <input type="text" placeholder="Enter Student No" name="studentNumber" id="studentNumber" onChange={change} value={student.studentNumber}/>
            </div>

            <div>
                <label htmlFor="classNumber">Class Number</label>
                <input type="text" placeholder="Enter Class No" name="classNumber" id="classNumber" onChange={change} value={student.classNumber}/>
            </div>

            {check == -1 && <p style={{color:"red",fontWeight: 600, fontSize: "8px"}}>Please fill in all fields or same student</p>}
            {check == 1 && <p style={{color:"green",fontWeight: 600, fontSize: "8px"}}>Student added successfully</p>}
            
            <input className={style.btn} type="submit" value="Add Student" style={{ margin: check!? "2px" : ""}}/>
        </form>
      </div>
  )
}

export default Student;