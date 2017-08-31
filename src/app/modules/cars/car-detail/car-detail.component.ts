import { Component, OnInit } from '@angular/core';
import { Car } from './../shared/car.model';
import { CarService } from './../shared/car.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../users/shared/user.model';
import { UserService } from './../../users/shared/user.service';
import { CarNote } from './../shared/carNote.module';
import { CarNoteService } from './../shared/carNote.service';
import { ViewChild } from '@angular/core';
import { MdDatepicker } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  public car: Car;
  public user: User;
  public carNotes: CarNote[];
  public insurancedate: string;
  public overviewdate: string;

  constructor(private carService: CarService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private carNoteService: CarNoteService) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.carService.getCarById(params['id']).subscribe((car) => {
        this.car = car;
        this.insurancedate = moment(this.car.insurance).format('MM DD YYYY');
        this.overviewdate = moment(this.car.overview).format('MM DD YYYY');
      });
    });

  }

  ngOnInit() {

  }

  // @ViewChild(MdDatepicker) overviewdatePicker: MdDatepicker<Date>;

  editCar(car , course , insurancedatePicker , overviewdatePicker , description , lastOilChange){
    console.log(course);
    console.log(moment(insurancedatePicker).format('YYYY MM DD'));
    console.log(moment(overviewdatePicker).format('YYYY MM DD'));

    console.log(description);
    console.log(lastOilChange); 
    console.log(car.carId); 
    this.carService.editCar(car , course , moment(insurancedatePicker).format('X') , moment(overviewdatePicker).format('X') , description , lastOilChange);
  } 
  info(car) {
    console.log(car);

    var insurancedate = moment(car.insurance).toISOString();
    var overviewdate = moment(car.overview).toISOString();
  } 
}
