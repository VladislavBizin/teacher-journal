import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from "@ngrx/store";
import * as SubjectsActions from './subjects.actions';

import {Observable, of} from "rxjs";
import {switchMap, catchError, map} from "rxjs/operators";
import {SubjectsService} from "../../subjects/services/subjects.service";

@Injectable()
export class SubjectsEffects {
  subjects$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(SubjectsActions.getSubjects),
        switchMap(() =>
          this.subjectsService.getSubjects()
            .pipe(
              map((subjects) => SubjectsActions.getSubjectsSuccess({subjects})),
              catchError((error) => of(SubjectsActions.getSubjectsError({error}))
              )
            )
        )
      )
  );

  students$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(SubjectsActions.getStudentsBySubjectID),
        switchMap(action =>
          this.subjectsService.getStudentsBySubjectID(action.id)
            .pipe(
              map((students) => SubjectsActions.getStudentsBySubjectIDSuccess({students})),
              catchError((error) => of(SubjectsActions.getStudentsBySubjectIDError({error})))
            ),
        ),
      )
  );

  constructor(
    private actions$: Actions,
    private subjectsService: SubjectsService
  ) {
  }
}
