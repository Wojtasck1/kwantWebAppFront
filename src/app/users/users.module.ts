import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/modules/shared.module';

import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersTopComponent } from './users-top/users-top.component';
import { UsersTabComponent } from './users-tab/users-tab.component';
import { UserService } from './shared/user.service';
import { HttpModule } from '@angular/http';
import { DataSource } from '@angular/cdk';
import { MdTableModule } from '@angular/material';
import { MdSortModule , MdIconModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';


@NgModule({
  imports: [
    UsersRoutingModule,
    FormsModule,
    CommonModule,
    MdTableModule,
    CdkTableModule,
    MdSortModule,
    MdIconModule,
  ],
  declarations: [
    UsersComponent,
    UsersTopComponent,
    UserDetailComponent,
    UsersTabComponent,
  ],
  bootstrap: [UsersTabComponent],
  providers: [
    UserService
  ]
})

export class UsersModule { }
