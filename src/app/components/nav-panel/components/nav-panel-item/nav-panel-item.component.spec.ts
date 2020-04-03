import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPanelItemComponent } from './nav-panel-item.component';

describe('NavPanelItemComponent', () => {
  let component: NavPanelItemComponent;
  let fixture: ComponentFixture<NavPanelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPanelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
