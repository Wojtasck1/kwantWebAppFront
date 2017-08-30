import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/modules/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './shared/user.service';
 import { UsersComponent } from './users.component';
 import { UserDetailComponent } from './user-detail/user-detail.component';
 import { UsersTabComponent } from './users-tab/users-tab.component';

 import { HttpModule } from '@angular/http';
 import { DataSource } from '@angular/cdk';
 import { MdTableModule, MdSortModule, MdIconModule } from '@angular/material';
 import { CdkTableModule } from '@angular/cdk';


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
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UsersTabComponent,
  ],
  bootstrap: [],
  providers: [
    UserService,
  ],
  
})

export class UsersModule { }
