import {ISubject} from "../../subjects/models/subject.models";
import { IStudent } from 'src/app/students/models/student.model';

export interface SubjectsState {
  data: readonly ISubject[] | [];
  students: readonly IStudent[] | [];
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
  readonly error: Error | string;
}

export const initialStudentsState: SubjectsState = {
  data: [],
  students: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

