export interface IState {
    reducer: {
        student: IstudentState[]
    }
}

export interface IstudentState {
    students: IStudent[];
}

export interface IStudent { 
    firstname: string,
    surname: string,
    studentNumber: number | string,
    classNumber: number | string
}

export interface ILessonState {
    lessons: ILesson[];
}

export interface ILesson { 
    lessonName: string,
    teacherName: string,
    teacherNumber: string | number,
    classNumber: string | number
}