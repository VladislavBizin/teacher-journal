import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IStudent} from "../models/student.model";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private configUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  public getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.configUrl}students`).pipe(delay(1200));
  }

  public deleteStudentById(id: number | string) {
    return this.http.delete(`${this.configUrl}students/${id}`).pipe(delay(2000));
  }

  public createStudent(student: IStudent) {
    return this.http.post(`${this.configUrl}students/`, student).pipe(delay(1200));
  }
}
