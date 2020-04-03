import {IStudent, STUDENTS_GRID_FIELDS} from 'src/app/students/models/student.model';

export interface StudentsState {
  data: readonly IStudent[] | [];
  fieldsOrder: {
    key: string,
    inOrder: boolean
  };
  readonly isLoading: boolean;
  readonly error: Error | string;
  readonly isLoaded: boolean;
}

export const initialStudentsState: StudentsState = {
  data: [],
  fieldsOrder: {
    key: STUDENTS_GRID_FIELDS.firstName,
    inOrder: true,
  },
  isLoading: false,
  error: null,
  isLoaded: false
};

