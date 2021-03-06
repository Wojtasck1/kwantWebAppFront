import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {AppConfig} from './config/app.config';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HeroTopComponent},
  {path: AppConfig.routes.heroes, loadChildren: './heroes/heroes.module#HeroesModule'},
  {path: AppConfig.routes.cars, loadChildren: './cars/cars.module#CarsModule'},
  {path: AppConfig.routes.tasks, loadChildren: './tasks/tasks.module#TasksModule'},
  {path: AppConfig.routes.users, loadChildren: './users/users.module#UsersModule'}, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
