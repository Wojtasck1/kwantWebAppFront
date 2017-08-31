import { Component, OnInit ,Inject } from '@angular/core';
import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import { ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { HolidayDialogComponent } from './holiday-dialog/holiday-dialog.component'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: User;

  dialogResult = "";

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public dialog: MdDialog,
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userService.getUserById(params['id']).subscribe((user) => {
        this.user = user;
        console.log(this.user);
      })
    })
  }

  ngOnInit() {
  }

  openDialog(): void {

    let dialogRef = this.dialog.open(HolidayDialogComponent , {
      width: '600px',
      data: 'this text is passed'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })

    // let dialogRef = this.dialog.open(HolidayDialog, {
    //   height: '400px',
    //   width: '600px',
    //   //data: { user: this.user }
    // }
  // );
 
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      // });
  }
} 

// @Component({
//   selector: 'holiday-dialog',
//   templateUrl: 'holiday-dialog.html',
// })
// export class HolidayDialog {

//   constructor(){}
//     // public dialogRef: MdDialogRef<HolidayDialog>,
//     // @Inject(MD_DIALOG_DATA) public data: any) { }

//   // onNoClick(): void {
//   //   this.dialogRef.close();
//   // }

// }