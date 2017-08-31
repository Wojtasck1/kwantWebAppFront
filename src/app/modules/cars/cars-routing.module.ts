import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppConfig} from '../../config/app.config';

import { CarsComponent } from './cars.component';
import { CarsTabComponent } from './cars-tab/cars-tab.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

// import {HeroListComponent} from './hero-list/hero-list.component';
// import {HeroDetailComponent} from './hero-detail/hero-detail.component';
// import {HeroesComponent} from './heroes.component';

const CarsRoutes: Routes = [
  {
    path: '',
    component: CarsComponent,
    children: [
      {path: '', component: CarsTabComponent},
      {path: ':id', component: CarDetailComponent}
    ]
  }
];

@NgModule({
  imports: [ 
    RouterModule.forChild(CarsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CarsRoutingModule {
}
