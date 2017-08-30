import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersTopComponent } from './users-top/users-top.component';
import { UsersTabComponent } from './users-tab/users-tab.component';
import { UserDetailComponent } from './user-detail/user-detail.component'
 
import {AppConfig} from '../config/app.config';


const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {path: '', component: UsersTabComponent},
      {path: ':id', component: UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UsersRoutingModule {
}
