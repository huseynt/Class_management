import style from "./point.module.css";
import { useEffect, useState } from "react";
import { IStudent, ILesson, IPoint } from "../../interface/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { addPoint } from "../../redux/expense/pointSlice";

const Point = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState<number>(0);
  const [point, setPoint] = useState<IPoint>({
    studentName: "",
    teacherName: "",
    lessonName: "",
    lessonClassNumber: "",
    dateTime: "",
    score: 0,
  });
  const [filterTeacher, setFilterTeacher] = useState<string[]>([]);
  const studentList: IStudent[] = useSelector(
    (state: RootState) => state.student.students
  );
  const uniqueStudent = Array.from(
    new Set(studentList.map((student: IStudent) => student.firstname))
  );
  const lessonList: ILesson[] = useSelector(
    (state: RootState) => state.lesson.lessons
  );
  const uniqueLesson = Array.from(
    new Set(lessonList.map((lesson: ILesson) => lesson.lessonName))
  );
  const pointList: IPoint[] = useSelector(
    (state: RootState) => state.point.points
  );

  const change = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setPoint({
      ...point,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "lessonName" || e.target.name === "studentName") {
      addClass(e);
    }
  };

  const addClass = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const studentTarget =
      e.target.name === "studentName" ? e.target.value : point.studentName;
    const selectedStudent = studentList.find(
      (s) => s.firstname === studentTarget
    );

    const lessonTarget =
      e.target.name === "lessonName" ? e.target.value : point.lessonName;
    const selectedLesson = lessonList.find(
      (l) => l.lessonName === lessonTarget
    );

    setFilterTeacher(
      lessonList
        .filter((l) => l.lessonName === lessonTarget)
        .map((l) => l.teacherName)
    );

    if (selectedStudent?.classNumber == selectedLesson?.classNumber) {
      setPoint({
        ...point,
        [e.target.name]: e.target.value,
        lessonClassNumber: selectedStudent?.classNumber,
      });
    } else {
      setPoint({
        ...point,
        [e.target.name]: e.target.value,
        lessonClassNumber: "",
      });
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (
      form.studentName.value !== "" &&
      form.teacherName.value !== "" &&
      form.lessonName.value !== "" &&
      form.lessonClassNumber.value !== "" &&
      form.dateTime.value !== ""
    ) {
      console.log(point);
      setCheck(1);
      resetForm();
      dispatch(
        addPoint({
          id: pointList.length + 1,
          ...point,
        })
      );
    } else {
      setCheck(-1);
      resetForm();
    }
  };

  const resetForm = () => {
    setTimeout(() => {
      setPoint({
        studentName: "",
        teacherName: "",
        lessonName: "",
        lessonClassNumber: "",
        dateTime: "",
        score: 0,
      });
      setCheck(0);
    }, 1000);
  };

  useEffect(() => {
    console.log(point);
  }, [point]);

  return (
    <div className={style.point} id="studentForm">
      <h2 style={{ textAlign: "center" }}>Point Form</h2>
      <form className={style.point_form} onSubmit={submit}>
        <div className={style.up_block}>
          
          <div>
            <label htmlFor="studentNameP">Choose a student: </label>
            <select name="studentName" id="studentNameP" onChange={change} value={point.studentName || ""}>
              <option value=""></option>
              {uniqueStudent.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lessonNameP">Choose a lesson: </label>
            <select name="lessonName" id="lessonNameP" onChange={change} value={point.lessonName || ""}>
              <option value=""></option>
              {uniqueLesson.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="teacherNameP">Choose a teacher: </label>
            <select name="teacherName" id="teacherNameP" onChange={change} value={point.teacherName || ""}>
              <option value=""></option>
              {filterTeacher?.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lessonClassNumberP">Choose a class: </label>
            <input
              type="text"
              value={point.lessonClassNumber}
              name="lessonClassNumber"
              id="lessonClassNumberP"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="dateTime">Date Time</label>
            <input
              type="date"
              placeholder="Enter Date"
              name="dateTime"
              id="dateTime"
              value={point.dateTime}
              onChange={change}
            />
          </div>

          <div>
            <label htmlFor="score">Score</label>
            <input
              type="number"
              placeholder="Enter Score"
              name="score"
              id="score"
              value={point.score}
              onChange={change}
              min={0}
              max={100}
            />
          </div>
        </div>

        {check === -1 && (
          <p style={{ color: "red", fontWeight: 600, fontSize: "8px" }}>
            Please fill in all fields or same information
          </p>
        )}
        {check === 1 && (
          <p style={{ color: "green", fontWeight: 600, fontSize: "8px" }}>
            Student added successfully
          </p>
        )}

        <input
          className={style.btn}
          type="submit"
          value="Add Student"
          style={{ margin: check! ? "2px" : "" }}
        />
      </form>

    </div>
  );
};

export default Point;
