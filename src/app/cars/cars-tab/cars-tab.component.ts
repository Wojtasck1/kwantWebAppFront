import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from './../shared/car.model';
import { CarService } from './../shared/car.service';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-cars-tab',
  templateUrl: './cars-tab.component.html',
  styleUrls: ['./cars-tab.component.css']
})
export class CarsTabComponent implements OnInit {

  cars: Car[];

  @ViewChild('form') myNgForm;

  constructor(private carService: CarService,
              private router: Router,) {

    this.carService.getAllCars().subscribe((cars) => {
      this.cars = cars.sort((a, b) => {
        return b.carId - a.carId;
      })
    })
  }

  seeCarDetails(car) {
    console.log(car);
    console.log(this.cars);
    this.router.navigate([AppConfig.routes.cars + '/' + car.carId]);
    //console.log(car.plates);
  }

  like(car) {
    console.log(car.carId);
    console.log("Like car");
  }

  remove(carId: string) {
    console.log(carId);
    console.log("Remov car");
  }
  ngOnInit() {
  }
}
