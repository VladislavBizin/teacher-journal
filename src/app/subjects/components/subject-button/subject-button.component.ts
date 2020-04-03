import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subject-button',
  templateUrl: './subject-button.component.html',
  styleUrls: ['./subject-button.component.css']
})

export class SubjectButtonComponent implements OnInit {
  @Input() public subject;
  public title: string;
  public id: string;

  constructor() { }

  ngOnInit() {
    this.title = this.subject.title;
    this.id = this.subject.id;
  }
}
