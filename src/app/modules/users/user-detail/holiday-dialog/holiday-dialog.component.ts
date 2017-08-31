import { Component, OnInit , Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-holiday-dialog',
  templateUrl: './holiday-dialog.component.html',
  styleUrls: ['./holiday-dialog.component.css']
})
export class HolidayDialogComponent implements OnInit {

  constructor(
    public thisDialogRef: MdDialogRef<HolidayDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: string
  ) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
 
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
