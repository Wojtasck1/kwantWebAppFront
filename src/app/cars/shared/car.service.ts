import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONFIG } from '../../config/app.config';
import { IAppConfig } from '../../config/iapp.config';

import { Car } from './car.model';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CarService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private carsUrl: string;
  private translations: any;

  private handleError(error: any): Promise<any> {
    this.request$.emit('finished');
    return Promise.reject(error.message || error);
  }

  constructor(private http: HttpClient,
    private translateService: TranslateService,
    private snackBar: MdSnackBar,
    @Inject(APP_CONFIG) private appConfig: IAppConfig) {
    this.request$ = new EventEmitter();

    this.carsUrl = this.appConfig.endpoints.cars;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
      'value': this.appConfig.votesLimit
    }).subscribe((texts) => {
      this.translations = texts;
    });
  }

  getAllCars(): Observable<Car[]> {
    this.request$.emit('starting');
    return this.http.get(this.carsUrl)
      .map(response => {
        this.request$.emit('finished');
        return response;
      })
      .catch(this.handleError);
  }

  getCarById(carId: string): Observable<Car> {
    this.request$.emit('starting');
    return this.http.get(this.carsUrl + '/' + carId)
      .map(response => {
        this.request$.emit('finished');
        return response;
      })
      .catch(this.handleError);
  }

  // editCar(car: Car , course: number , insurancedatePicker: string , overviewdatePicker: string , description: string , lastOilChange: number) {
  //   car.course = course;
  //   car.insurance = insurancedatePicker;
  //   car.overview =  overviewdatePicker;
  //   car.description = description;
  //   car.lastOilChange = lastOilChange;
  //   console.log(this.carsUrl + car.carId);
  //   console.log(JSON.stringify(car));
    
  //   return this.http
  //     .put(this.carsUrl + '/' + car.carId, JSON.stringify(car))
  // }
  editCar(car: Car , course: number , insurancedatePicker: string , overviewdatePicker: string , description: string , lastOilChange: number): Promise<Car> {
    const url = this.carsUrl + car.carId;
        car.course = course;
    car.insurance = insurancedatePicker + "000";
    car.overview =  overviewdatePicker + "000";
    car.description = description;
    car.lastOilChange = lastOilChange;
    console.log(JSON.stringify(car));
    return this.http
      .put(url, JSON.stringify(car), {headers: this.headers})
      .toPromise()
      .then(() => car)
      .catch(this.handleError);
  }
}