import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/modules/shared.module';

// import {BrowserModule} from '@angular/platform-browser';
import { UsersComponent } from './users.component';
import { UserDetailComponent} from './user-detail/user-detail.component';
import { UsersTopComponent } from './users-top/users-top.component';
import { UsersTabComponent } from './users-tab/users-tab.component';
import { UserService} from './shared/user.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    UsersRoutingModule,
    // BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
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
