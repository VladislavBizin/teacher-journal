import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  SUBJECT_FIELDS_KEYS,
  SubjectFieldNames
} from "../../models/subject.models";
import {Observable, of, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../Store";
import { map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import * as SubjectsActions from '../../../Store/subjects/subjects.actions';
import {SubjectsState} from "../../../Store/subjects";


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {
  public subjects$: Observable<SubjectsState>;

  public fieldsKey: string[] = SUBJECT_FIELDS_KEYS;
  public fieldsName = SubjectFieldNames;
  public subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params
        .pipe(map(v => v.id))
        .subscribe(id => this.store.dispatch(SubjectsActions.getStudentsBySubjectID({id})))
    );

    this.subjects$ = this.store.pipe(select('subjects'));
    console.log(this.subjects$);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
