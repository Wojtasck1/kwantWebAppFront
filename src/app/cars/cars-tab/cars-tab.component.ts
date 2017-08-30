import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from './../shared/car.model';
import { CarService } from './../shared/car.service';
import { Router } from '@angular/router';
import { AppConfig } from '../../config/app.config';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-tab',
  templateUrl: './cars-tab.component.html',
  styleUrls: ['./cars-tab.component.css']
})
export class CarsTabComponent implements OnInit {

  cars: Car[];

  @ViewChild('form') myNgForm;

  constructor(private carService: CarService,
    private router: Router,
  ) {
    this.carService.getAllCars().subscribe((cars) => {
      this.cars = cars.sort((a, b) => {
        return b.carId - a.carId;
      })
    })
  }

  seeCarDetails(car) {
    this.router.navigate([AppConfig.routes.cars + '/' + car.carId]);
  }

  checkInsurance(car): boolean {
    return moment(moment(car.insurance).toISOString()).isBefore(moment().subtract(7, 'd').toISOString());
  }
  
  checkOverview(car): boolean {
    return moment(moment(car.overview).toISOString()).isBefore(moment().subtract(7, 'd').toISOString());
  }

  checkOil(car): boolean {
    return false;
  }

  remove(carId: string) {
    console.log(carId);
    console.log("Remov car");
  }
  ngOnInit() {
  }
}
