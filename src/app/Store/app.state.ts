import {StudentsState} from "./students";
import {SubjectsState} from "./subjects";

export interface AppState {
  students: StudentsState;
  subjects: SubjectsState;
}
