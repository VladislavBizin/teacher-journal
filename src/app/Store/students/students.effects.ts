import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from "@ngrx/store";
import * as StudentsActions from './students.actions';

import {Observable, of} from "rxjs";
import {switchMap, catchError, exhaustMap, map} from "rxjs/operators";
import {StudentsService} from "../../students/services/students.service";
import {IStudent} from "../../students/models/student.model";

@Injectable()
export class StudentsEffects {
  loadStudents$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(StudentsActions.getStudents),
        switchMap(() =>
          this.studentsService.getStudents()
            .pipe(
              map((students) => StudentsActions.getStudentsSuccess({students})),
              catchError((error) => of(StudentsActions.getStudentsError({error})))
            ),
        ),
      )
  );

  deleteStudentById$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(StudentsActions.deleteStudentById),
        exhaustMap(action =>
          this.studentsService.deleteStudentById(action.id)
            .pipe(
              map(() => StudentsActions.deleteStudentByIdSuccess({...action})),
              catchError((error) => of(StudentsActions.deleteStudentByIdError({error})))
            )
        )
      )
  );

  createStudent$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(StudentsActions.createStudent),
        exhaustMap(action =>
          this.studentsService.createStudent(action.student)
            .pipe(
              map((student: IStudent) => StudentsActions.createStudentSuccess({student})),
              catchError((error) => of(StudentsActions.createStudentError({error})))
            )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private studentsService: StudentsService
  ) {
  }
}
