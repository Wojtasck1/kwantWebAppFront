import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdDatepicker, MdDialog } from '@angular/material';
import { Holiday } from './../../shared/holiday.model';
import { HolidayService } from './../../shared/holiday.service';
import * as moment from 'moment';



@Component({
  selector: 'app-holiday-dialog',
  templateUrl: './holiday-dialog.component.html',
  styleUrls: ['./holiday-dialog.component.css']
})
export class HolidayDialogComponent implements OnInit {

  public holiday: Holiday;

  public type: string;

  constructor(
    // public holiday: Holiday,
    public thisDialogRef: MdDialogRef<HolidayDialogComponent>,
    private holidayService: HolidayService,
    @Inject(MD_DIALOG_DATA) public data: any,
  ) {

  }

  holidayTypes = [
    { value: this.type = "Urlop bezpłatny", viewValue: 'Urlop bezpłatny' },
    { value: this.type = "Urlop okolicznościowy", viewValue: 'Urlop okolicznościowy' },
    { value: this.type = "Urlop na żadanie", viewValue: 'Urlop na żadanie' },
    { value: this.type = "Urlop nad dzieckiem", viewValue: 'Urlop nad dzieckiem' },
    { value: this.type = "Urlop ojcowski", viewValue: 'Urlop ojcowski' },
    { value: this.type = "Urlop macierzyński", viewValue: 'Urlop macierzyński' },
    { value: this.type = "Urlop rodzicielski", viewValue: 'Urlop rodzicielski' },
    { value: this.type = "Urlop wychowawczy", viewValue: 'Urlop wychowawczy' },
    { value: this.type = "Urlop na poszukiwanie pracy", viewValue: 'Urlop na poszukiwanie pracy' },
    { value: this.type = "Urlop szkoleniowy", viewValue: 'Urlop szkoleniowy' }
  ];

  ngOnInit() {

  }

  onCloseConfirm( brgin , end) {
    this.thisDialogRef.close('Confirm');
    console.log(this.data.userId);
    console.log(this.holiday);
    console.log(this.type);
    console.log(moment().format("X"));
    console.log(moment(brgin).format("X"));
    console.log(moment(end).format("X"));
    // this.holiday.userId = this.data.userId;
    // this.holiday.holidayType = this.type;
    // this.holiday.createDate =  moment().format("X");

    // this.holiday.beginDate = 
    // this.holiday.endDate = 
    // this.holidayService.createHoliday(this.holiday);

  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
