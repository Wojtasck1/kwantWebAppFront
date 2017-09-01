import { Component, OnInit , Inject } from '@angular/core';
import { MdDialogRef , MD_DIALOG_DATA , MdDatepicker , MdDialog} from '@angular/material';
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

  holidayTypes = [
    {value: 'steak-0', viewValue: 'Urlop bezpłatny'},
    {value: 'pizza-1', viewValue: 'Urlop okolicznościowy'},
    {value: 'tacos-2', viewValue: 'Urlop na żadanie'},
    {value: 'tacos-2', viewValue: 'Urlop nad dzieckiem'},
    {value: 'tacos-2', viewValue: 'Urlop ojcowski'},
    {value: 'tacos-2', viewValue: 'Urlop macierzyński'},
    {value: 'tacos-2', viewValue: 'Urlop rodzicielski'},
    {value: 'tacos-2', viewValue: 'Urlop wychowawczy'},
    {value: 'tacos-2', viewValue: 'Urlop na poszukiwanie pracy'},
    {value: 'tacos-2', viewValue: 'Urlop szkoleniowy'}
  ];

  ngOnInit() {
    
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');

  }
 
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
