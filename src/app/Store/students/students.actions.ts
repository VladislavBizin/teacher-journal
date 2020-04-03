import {createAction, props} from "@ngrx/store";
import {IStudent} from "../../students/models/student.model";

export const getStudents = createAction('[Students Page (App)] GET_STUDENTS');

export const getStudentsSuccess = createAction(
  '[Students effect] GET_STUDENTS_SUCCESS',
  props<{ students: IStudent[] }>()
);

export const getStudentsError = createAction(
  '[Students effect] GET_STUDENTS_ERROR',
  props<{ error: string | Error }>()
);

export const sortStudentsByKey = createAction(
  '[Students Page] SORT_STUDENTS_BY_KEY',
  props<{ key: string }>()
);

export const updateStudent = createAction(
  '[Students Page] UPDATE_STUDENT',
  props<{ student: IStudent }>()
);

export const deleteStudentById = createAction(
  '[Students Page] DELETE_STUDENT_BY_ID',
  props<{ id: number | string }>()
);

export const deleteStudentByIdSuccess = createAction(
  '[Students effect] DELETE_STUDENT_SUCCESS',
  props<{ id: number | string }>()
);

export const deleteStudentByIdError = createAction(
  '[Students effect] DELETE_STUDENT_ERROR',
  props<{ error: string | Error }>()
);

export const createStudent = createAction(
  '[Students Page] CREATE_NEW_STUDENT',
  props<{ student: IStudent }>()
);

export const createStudentSuccess = createAction(
  '[Students Page] CREATE_STUDENT_SUCCESS',
  props<{student: IStudent}>()
);

export const createStudentError = createAction(
  '[Students Page] CREATE_STUDENT_ERROR',
  props<{error: string | Error}>()
);
