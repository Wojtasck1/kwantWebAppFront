import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTabComponent } from './cars-tab.component';

describe('CarsTabComponent', () => {
  let component: CarsTabComponent;
  let fixture: ComponentFixture<CarsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
