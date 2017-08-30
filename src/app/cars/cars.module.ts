import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from '../shared/modules/shared.module';

import { CarsTabComponent } from './cars-tab/cars-tab.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsComponent } from './cars.component';
import { CarService } from './shared/car.service';
import { CarNoteService} from './shared/carNote.service';
import { HttpModule } from '@angular/http';
import { DataSource } from '@angular/cdk';
import { MdTableModule } from '@angular/material';
import { MdSortModule, MdIconModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
// import { ViewChild } from '@angular/core';
import { UserService } from './../users/shared/user.service';
import * as moment from 'moment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    MdTableModule,
    MdSortModule,
    MdIconModule,
    CdkTableModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    // ViewChild,
  ],
  declarations: [
    CarsComponent,
    CarsTabComponent,
    CarDetailComponent
  ],
  entryComponents: [
  ],
  providers: [
    CarService,
    UserService,
    CarNoteService,
  ]
})
export class CarsModule { }
