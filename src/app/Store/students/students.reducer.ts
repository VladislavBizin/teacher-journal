import {Action, createReducer, on} from "@ngrx/store";
import {initialStudentsState, StudentsState} from "./students.state";
import * as StudentsActions from './students.actions';
import {IStudent} from "../../students/models/student.model";
import * as Utils from '../../share/utils/utils';

const reducer = createReducer(
  initialStudentsState,

  on(StudentsActions.getStudents, state => ({ ...state, isLoading: true })),

  on(StudentsActions.getStudentsSuccess, (state, {students}) => {
    const key = state.fieldsOrder.key;
    const order = state.fieldsOrder.inOrder;
    return {
      ...state,
      data: [...students]
        .sort((prev, next) => Utils.compare(prev[key], next[key], order)),
      isLoading: false,
      fieldsOrder: {
        ...state.fieldsOrder,
        inOrder: !order,
      },
      isLoaded: true
    }
  }),

  on(StudentsActions.getStudentsError, (state, {error}) => ({ ...state, isLoading: false, error })),

  on(StudentsActions.createStudentSuccess, (state, {student}) => {
    const key = state.fieldsOrder.key;
    const order = !state.fieldsOrder.inOrder;
    return {
      ...state,
      data: [...state.data, student].sort((prev, next)=> Utils.compare(prev[key], next[key], order)),
    };
  }),

  on(StudentsActions.deleteStudentByIdSuccess, (state, {id}) => {
    return {
      ...state,
      data: state.data.filter((student: IStudent) => student.id !== id),
    };
  }),

  on(StudentsActions.sortStudentsByKey, (state, {key}) => {
    let newKey: string;
    let newOrder: boolean;

    if(state.fieldsOrder.key === key){
      newOrder = state.fieldsOrder.inOrder;
      newKey = state.fieldsOrder.key
    } else {
      newOrder = true;
      newKey = key;
    }

    return {
      ...state,
      data: [...state.data].sort((prev, next) => Utils.compare(prev[key], next[key], newOrder)),
      fieldsOrder: {
        ...state.fieldsOrder,
        inOrder: !newOrder,
        key: newKey
      }
    }
  }),

  on(StudentsActions.updateStudent, state => {
    console.log('student reducer updateStudent');
    return {...state};
  }),
);

export function studentsReducer(state: StudentsState | undefined, action: Action) {
  return reducer(state, action);
}
