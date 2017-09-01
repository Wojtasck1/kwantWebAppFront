import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/modules/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './shared/user.service';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersTabComponent } from './users-tab/users-tab.component';
import { HolidayService } from './shared/holiday.service';
import { HttpModule } from '@angular/http';
import { DataSource } from '@angular/cdk';
import { MdTableModule, MdSortModule, MdIconModule , MdDatepickerModule , MaterialModule , MdNativeDateModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { HolidayDialogComponent } from './user-detail/holiday-dialog/holiday-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpModule,
    MdTableModule,
    MdSortModule,
    MdIconModule,
    CdkTableModule,
    UsersRoutingModule,
    MdDatepickerModule,
    MaterialModule,
    MdNativeDateModule,
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UsersTabComponent,
    HolidayDialogComponent,
  ],
  entryComponents: [
    HolidayDialogComponent
  ],
  bootstrap: [],
  providers: [
    UserService,
    HolidayService,
  ],

})

export class UsersModule { }