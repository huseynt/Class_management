import style from './class.module.css'
import { useEffect, useState } from 'react'
import { ILesson } from '../../interface/interface'
import { useDispatch, useSelector } from 'react-redux'
import { addLesson } from '../../redux/expense/lessonSlice'
import { RootState } from '../../redux/rootReducer'

const Class = () => {

    const dispatch = useDispatch();
    const lessonList: ILesson[] = useSelector((state: RootState) => state.lesson.lessons);
    const [check, setCheck] = useState<number>(0)
    const [lesson, setLesson] = useState<ILesson>({
        lessonName: "",
        teacherName: "",
        teacherNumber: "",
        classNumber: ""
    })

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if ( 
            lessonList.find((lessons) => lessons.lessonName === lesson.lessonName)&&lessonList.find((lessons) => lessons.teacherName === lesson.teacherName) || 
            lessonList.find((lessons) => lessons.teacherNumber !== lesson.teacherNumber && lessons.teacherName === lesson.teacherName) ||
            lessonList.find((lessons) => lessons.teacherNumber === lesson.teacherNumber && lessons.teacherName !== lesson.teacherName) ||
            form.lessonName.value === "" || 
            form.teacherName.value === "" || 
            form.teacherNumber.value === "" || 
            form.classNumber.value === "") {
            setCheck(-1)
            resetForm()
        }  else {
            setLesson({
                lessonName: form.lessonName.value,
                teacherName: form.teacherName.value,
                teacherNumber: form.teacherNumber.value,
                classNumber: form.classNumber.value
            })
            dispatch(addLesson({ 
                id: lessonList.length + 1,
                ...lesson
            }))
            setCheck(1)
            resetForm()
        }
    }

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLesson({
            ...lesson,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setTimeout(() => {
            setLesson({
                lessonName: "",
                teacherName: "",
                teacherNumber: "",
                classNumber: ""
            })
            setCheck(0)
        },1000)
    }

    useEffect(() => { 
        console.log(lesson)
    }, [lesson])
    
  return (
      <div className={style.class} id='classForm'>
        <h2 style={{textAlign: "center"}}>Lesson Form</h2>
        <form className={style.classForm} onSubmit={submit}>

            <div>
                <label htmlFor="lessonName">Lesson Name</label>
                <input type="text" placeholder="Enter Name" name="lessonName" id="lessonName" onChange={change} value={lesson.lessonName}/>
            </div>

            <div>
                <label htmlFor="teacherName">Teacher Name</label>
                <input type="text" placeholder="Enter Name" name="teacherName" id="teacherName" onChange={change} value={lesson.teacherName}/>
            </div>

            <div>
                <label htmlFor="teacherNumber">Teacher Number</label>
                <input type="text" placeholder="Enter Teacher No" name="teacherNumber" id="teacherNumber" onChange={change} value={lesson.teacherNumber}/>
            </div>

            <div>
                <label htmlFor="lessonClassNumber">Class Number</label>
                <input type="text" placeholder="Enter Class No" name="classNumber" id="lessonClassNumber" onChange={change} value={lesson.classNumber}/>
            </div>
            {check == -1 && <p style={{color:"red",fontWeight:600, fontSize: "8px"}}>Please fill in all fields or same information</p>}
            {check == 1 && <p style={{color:"green",fontWeight:600, fontSize: "8px"}}>Student added successfully</p>}
            
            <input className={style.btn} type="submit" value="Add Lesson" style={{ margin: check!? "2px" : ""}}/>
        </form>
      </div>
  )
}

export default Class
