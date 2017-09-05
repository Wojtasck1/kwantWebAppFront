import { Component, OnInit, Inject , ViewChild} from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdDatepicker, MdDialog } from '@angular/material';
import { Holiday } from './../../shared/holiday.model';
import { HolidayService } from './../../shared/holiday.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';



@Component({
  selector: 'app-holiday-dialog',
  templateUrl: './holiday-dialog.component.html',
  styleUrls: ['./holiday-dialog.component.css']
})
export class HolidayDialogComponent implements OnInit {

  public newHolidayForm: FormGroup;

  public type: string;

  error: string;
  @ViewChild('form') myNgForm; 

  constructor(
    public thisDialogRef: MdDialogRef<HolidayDialogComponent>,
    private holidayService: HolidayService,
    private formBuilder: FormBuilder, 
    @Inject(MD_DIALOG_DATA) public data: any,
  ) {

    this.newHolidayForm = this.formBuilder.group({
      'userId': [this.data.userId, [Validators.required]],
      'holidayType': ['', [Validators.required]],
      'beginDate': ['', [Validators.required]],
      'endDate': ['', [Validators.required]]
    });
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

  createNewHoliday(newHoliday){
    this.holidayService.createHoliday(newHoliday).subscribe((newHolidayWithId) => {
      this.myNgForm.resetForm();
    }, (response) => {
      if (response.status === 500) {
        this.error = 'errorHasOcurred';
      }
    });
  }

  onCloseConfirm( begin , end) {
    this.thisDialogRef.close('Confirm');
    console.log(this.data.userId);
    console.log(this.type);
    console.log(moment().format("X"));
    console.log(moment(begin).format("X"));
    console.log(moment(end).format("X"));

  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
