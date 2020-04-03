import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IGridStudentsConfig, IStudent, STUDENT_GRID_TABLE_CONFIG} from "../../models/student.model";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() student: IStudent;
  @Input() index: number;
  @Output() deleteItem = new EventEmitter<number>();

  public tableGridConfig: IGridStudentsConfig = STUDENT_GRID_TABLE_CONFIG;

  constructor() { }

  public deleteStudent() {
    this.deleteItem.emit(this.student.id);
  }
}
