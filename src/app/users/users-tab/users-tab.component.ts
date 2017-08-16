import {Component, ViewChild} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';
import {AppConfig} from '../../config/app.config';
import {Router} from '@angular/router';
import {LoggerService} from '../../core/logger.service';

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent {

  public users: User[];

  constructor(
    private userService: UserService, 
    private dialog: MdDialog, 
    private ruter: Router,
    private FormBuilder: FormBuilder) {
    this.userService.getAllUsers()
  }



  ///////////////////////////////////////////////
  title = 'Angular 2 CRUD operation with an Array';
  employees = [
    { name: "Sikandar", position: "Programmer" },
    { name: "Alex", position: "Designer" },
    { name: "Maria", position: "Manager" }
  ];
  model: any = {};
  model2: any = {};
  msg: any = "";
  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is successfully added..... ";

  }
  deleteEmployee(i) {
    this.employees.splice(i, 1);
    this.msg = "Record is successfully deleted..... ";

  }
  myValue;
  editEmployee(k) {
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;

  }
  updateEmployee() {
    let k = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i == k) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }



  }
  clickMe() {
    this.msg = "";
  }
}