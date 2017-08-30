import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './../shared/user.model';
import { UserService } from './../shared/user.service';
import { MdProgressSpinnerModule } from '@angular/material';
import { Router } from '@angular/router';
import { AppConfig } from '../../config/app.config';


@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css'],
})

export class UsersTabComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,
              private router: Router){
    userService.getAllUsers().subscribe((users) => {
      this.users = users.sort((a,b) =>{
        return b.userId - a.userId;
      });
    });
  } 

  load(){
    console.log(this.users);
  }

  ngOnInit(){
    console.log(this.users);
  }

  seeUsersDetails(user){
    this.router.navigate([AppConfig.routes.users + '/' + user.userId]);
  }
}