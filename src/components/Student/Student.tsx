import style from './student.module.css'
import { useEffect, useState } from 'react'
import { IStudent } from '../../interface/interface'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../../redux/expense/studentSlice'


const Student = () => {

    const dispatch = useDispatch();
    const studentList: IStudent[] = useSelector((state: any) => state.student.students);
    const [check, setCheck] = useState<number>(0)
    const [student,setStudent] = useState<IStudent>({
        firstname: "",
        surname: "",
        studentNumber: "",
        classNumber: ""
    })


    //  on Submit Form
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if ( studentList.find((student) => student.studentNumber === form.studentNumber.value) || form.firstname.value === "" || form.surname.value === "" || form.studentNumber.value === "" || form.classNumber.value === "") {
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

    // On Change Input
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    // Reset Form
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



    useEffect(() => { 
        console.log(student, studentList)
    }, [student, studentList])
    
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
                <label htmlFor="studentNumber">Student No</label>
                <input type="text" placeholder="Enter Student No" name="studentNumber" id="studentNumber" onChange={change} value={student.studentNumber}/>
            </div>

            <div>
                <label htmlFor="classNumber">Class No</label>
                <input type="text" placeholder="Enter Class No" name="classNumber" id="classNumber" onChange={change} value={student.classNumber}/>
            </div>

            {check == -1 && <p style={{color:"red",fontWeight: 600, fontSize: "11px"}}>Please fill in all fields or same student</p>}
            {check == 1 && <p style={{color:"green",fontWeight: 600, fontSize: "11px"}}>Student added successfully</p>}
            
            <input className={style.btn} type="submit" value="Add Student"/>
        </form>
      </div>
  )
}

export default Student
