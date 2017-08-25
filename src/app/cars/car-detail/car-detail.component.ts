import { Component, OnInit } from '@angular/core';
import { Car } from './../shared/car.model';
import { CarService } from './../shared/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  public car: Car;
  public foo: any;

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.carService.getHeroById(params['id']).subscribe((car) => {
        this.car = car;
      });
    });
  }
  info(car){
    console.log(car);
  }

}
