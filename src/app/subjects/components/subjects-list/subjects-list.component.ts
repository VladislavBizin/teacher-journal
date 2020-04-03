import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../Store";
import {Observable} from "rxjs";
import {SubjectsState} from "../../../Store/subjects";
import * as SubjectsActions from '../../../Store/subjects/subjects.actions';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})

export class SubjectsListComponent implements OnInit{
  public subjects$: Observable<SubjectsState>;
  constructor(private store: Store<AppState>) {
  }

  public ngOnInit() {
    this.store.dispatch(SubjectsActions.getSubjects());
    this.subjects$ = this.store.pipe(select('subjects'));
  }
}
