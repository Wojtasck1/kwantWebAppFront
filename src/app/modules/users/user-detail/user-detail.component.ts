import { Component, OnInit ,Inject } from '@angular/core';
import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA , MdDatepicker} from '@angular/material';
import { HolidayDialogComponent } from './holiday-dialog/holiday-dialog.component'
import { Holiday } from './../shared/holiday.model';
import { HolidayService } from './../shared/holiday.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: User;
  public holidays: Holiday[];

  dialogResult = "";

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public dialog: MdDialog,
    private holidayService: HolidayService,
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userService.getUserById(params['id']).subscribe((user) => {
        this.user = user;
        this.holidayService.getHolidayByUserId(user.userId).subscribe((holidays) =>{
          this.holidays = holidays;
        })
      })
    })
  }

  ngOnInit() {
  }

  openDialog(): void {

    let dialogRef = this.dialog.open(HolidayDialogComponent , {
      width: '600px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }

  openDialog1(){
    console.log(this.holidays);
  }
} 