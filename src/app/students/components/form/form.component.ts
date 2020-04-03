import {Component, OnInit} from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../Store";
import {Observable} from "rxjs";
import {IStudent} from "../../models/student.model";
import * as StudentsActions from "../../../Store/students/students.actions";
import {StudentsState} from "../../../Store/students";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  public studentForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required,],
    email: ['', Validators.email],
    address: '',
    description: '',
  });

  public students$: Observable<StudentsState>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.students$ = this.store.pipe(select('students'));
  }

  public onSubmit() {
    const student : IStudent = { ...this.studentForm.value, subjects: []};
    this.store.dispatch(StudentsActions.createStudent({student}));
    this.reset();
  }

  private reset() {
    for (let name in this.studentForm.controls) {
      this.studentForm.controls[name].setValue('');
      this.studentForm.controls[name].setErrors(null);
    }
  }

  getErrorMessage(fieldKey: string) {
    const field = this.studentForm.controls[fieldKey];
    const errorFields = {
      firstName: {
        required: 'You must enter a value',
       },
      lastName: {
        required: 'You must enter a value',
      },
      email: {
        required: 'You must enter a value',
        email: 'Not a valid email'
      },
    };

    return Object.keys(errorFields[fieldKey])
      .reduce((acc, error) => {
      if (field.hasError(error)) {
        acc = errorFields[fieldKey][error];
      }
      return acc;
    }, '');
  }
}
