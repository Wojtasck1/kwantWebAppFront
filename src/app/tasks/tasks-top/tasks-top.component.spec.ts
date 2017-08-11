import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTopComponent } from './tasks-top.component';

describe('TaskTopComponent', () => {
  let component: TasksTopComponent;
  let fixture: ComponentFixture<TasksTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
