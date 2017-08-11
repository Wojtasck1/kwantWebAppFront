import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CarsRoutingModule} from './cars-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {CarsTabComponent} from './cars-tab/cars-tab.component';//, RemoveHeroDialogComponent} from './hero-list/hero-list.component';
//import {HeroService} from './shared/hero.service';
import {CarDetailComponent} from './car-detail/car-detail.component';
import {CarsComponent} from './cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CarsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CarsComponent,
    CarsTabComponent,
    //RemoveHeroDialogComponent,
    CarDetailComponent
  ],
  entryComponents: [
    //RemoveHeroDialogComponent
  ],
  providers: [
    //HeroService
  ]
})
export class CarsModule { }
