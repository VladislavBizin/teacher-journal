import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectButtonComponent } from './subject-button.component';

describe('SubjectComponent', () => {
  let component: SubjectButtonComponent;
  let fixture: ComponentFixture<SubjectButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
