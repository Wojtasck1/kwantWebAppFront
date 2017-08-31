import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDialogComponent } from './holiday-dialog.component';

describe('HolidayDialogComponent', () => {
  let component: HolidayDialogComponent;
  let fixture: ComponentFixture<HolidayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
