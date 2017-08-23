import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from './../shared/car.model'
import { CarService } from './../shared/car.service'

@Component({
  selector: 'app-cars-tab',
  templateUrl: './cars-tab.component.html',
  styleUrls: ['./cars-tab.component.css']
})
export class CarsTabComponent implements OnInit {

  cars: Car[];

  @ViewChild('form') myNgForm;

  constructor(private carService: CarService) {

    this.carService.getAllCars().subscribe((cars) => {
      this.cars = cars.sort((a, b) => {
        return b.carId = a.carId;
      })
    })
  }

  seeCarDetails(car) {
    console.log(car);
    console.log("See car ID");
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
