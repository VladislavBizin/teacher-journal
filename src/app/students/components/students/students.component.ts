import {Component, OnInit} from '@angular/core';
import {IGridStudentsConfig, STUDENTS_GRID_HEADER_CONFIG} from "../../models/student.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../Store";
import {Observable} from "rxjs";
import * as StudentsActions from '../../../Store/students/students.actions';
import {take} from "rxjs/operators";
import {StudentsState} from "../../../Store/students";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public students$: Observable<StudentsState>;

  public headerGridConfig: IGridStudentsConfig = STUDENTS_GRID_HEADER_CONFIG;


  constructor(private store: Store<AppState>) {
  }

  public ngOnInit(): void {
    this.students$ = this.store.pipe(select('students'));
    this.students$.pipe(
      take(1),
    ).subscribe(student => {
      if (!student.isLoaded) {
        this.store.dispatch(StudentsActions.getStudents())
      }
    });
  }


  public sortStudentsByKey(key: string): void {
    this.store.dispatch(StudentsActions.sortStudentsByKey({key}));
  }

  public deleteStudentHandler(id: number) {
    this.store.dispatch(StudentsActions.deleteStudentById({id}));
  }
}
