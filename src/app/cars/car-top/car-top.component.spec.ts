import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTopComponent } from './car-top.component';

describe('CarTopComponent', () => {
  let component: CarTopComponent;
  let fixture: ComponentFixture<CarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
