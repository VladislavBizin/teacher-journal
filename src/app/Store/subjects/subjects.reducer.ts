import {Action, createReducer, on} from "@ngrx/store";
import {initialStudentsState, SubjectsState} from "./subjects.state";
import * as SubjectsActions from './subjects.actions';

const reducer = createReducer(
  initialStudentsState,
  on(SubjectsActions.getSubjects, state => ({...state, isLoading: true})),

  on(SubjectsActions.getSubjectsSuccess, (state, {subjects}) => {
    return {
      ...state,
      data: [...subjects],
      isLoading: false,
    }
  }),

  on(SubjectsActions.getStudentsBySubjectIDSuccess, (state, {students}) => {
    return {
      ...state,
      students
    }
  })
);

export function subjectsReducer(state: SubjectsState | undefined, action: Action) {
  return reducer(state, action);
}
