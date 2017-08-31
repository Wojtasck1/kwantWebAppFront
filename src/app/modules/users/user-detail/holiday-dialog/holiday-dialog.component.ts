import { Component, OnInit , Inject } from '@angular/core';
import { MdDialogRef , MD_DIALOG_DATA , MdDatepicker } from '@angular/material';
import { Holiday } from './../../shared/holiday.model';
import { HolidayService } from './../../shared/holiday.service';

@Component({
  selector: 'app-holiday-dialog',
  templateUrl: './holiday-dialog.component.html',
  styleUrls: ['./holiday-dialog.component.css']
})
export class HolidayDialogComponent implements OnInit {

  public holiday: Holiday;

  constructor(
    public thisDialogRef: MdDialogRef<HolidayDialogComponent>,
    private holidayService: HolidayService,
    @Inject(MD_DIALOG_DATA) public data: string,

  ) { 
    
  } 

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
 
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
