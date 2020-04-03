import {createAction, props} from "@ngrx/store";
import {ISubject} from "../../subjects/models/subject.models";
import {IStudent} from "../../students/models/student.model";

export const getSubjects = createAction('[Subjects Page (App)] GET_SUBJECTS');

export const getSubjectsSuccess = createAction(
  '[Subjects Page] GET_SUBJECTS_SUCCESS',
  props<{subjects: ISubject[]}>()
);

export const getSubjectsError = createAction(
  '[Subjects PAge] GET_SUBJECTS_ERROR',
  props<{error: Error | string}>()
);

export const getStudentsBySubjectID = createAction(
  '[Subject Page] GET_STUDENTS_BY_SUBJECTS_ID',
  props<{id: string | number}>()
);

export const getStudentsBySubjectIDSuccess = createAction(
  '[Subject Page] GET_STUDENTS_BY_SUBJECTS_ID_SUCCESS',
  props<{students: IStudent[]}>()
);
export const getStudentsBySubjectIDError = createAction(
  '[Subject Page] GET_STUDENTS_BY_SUBJECTS_ID_ERROR',
  props<{error: Error | string}>()
);
