import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

 import { UsersComponent } from './users.component';
 import { UserDetailComponent } from './user-detail/user-detail.component';
 import { UsersTabComponent } from './users-tab/users-tab.component';


@NgModule({
  imports: [
    UsersRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UsersTabComponent,
  ],
  bootstrap: [], 
  providers: [

  ],
  
})

export class UsersModule { }
