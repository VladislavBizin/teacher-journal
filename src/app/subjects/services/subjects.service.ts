import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs/operators";
import {Observable} from "rxjs";
import {ISubject} from "../models/subject.models";
import {IStudent} from "../../students/models/student.model";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private configUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  public getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(`${this.configUrl}subjects`).pipe(delay(900));
  }

  public getStudentsBySubjectID(id: string | number): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.configUrl}students?subjects_like=${id}`).pipe(delay(600));
  }
}
