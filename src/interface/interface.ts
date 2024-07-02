export interface IState {
    reducer: {
        student: IstudentState[]
    }
}

export interface IstudentState {
    students: INewStudent[];
}

export interface IStudent { 
    firstname: string,
    surname: string,
    studentNumber: number | string,
    classNumber: number | string
}

export interface INewStudent {
    id: number, 
    firstname: string,
    surname: string,
    studentNumber: number | string,
    classNumber: number | string
}

export interface ILessonState {
    lessons: INewLesson[];
}

export interface ILesson { 
    lessonName: string,
    teacherName: string,
    teacherNumber: string | number,
    classNumber: string | number
}

export interface INewLesson { 
    id: number,
    lessonName: string,
    teacherName: string,
    teacherNumber: string | number,
    classNumber: string | number
}


export interface IPointState {
    points: INewPoint[];
}

export interface IPoint {
    studentName: string,
    teacherName: string,
    lessonName: string,
    lessonClassNumber: string | number | undefined,
    dateTime: string,
    score: number
}

export interface INewPoint {
    id: number,
    studentName: string,
    teacherName: string,
    lessonName: string,
    lessonClassNumber: string | number | undefined,
    dateTime: string,
    score: number
}