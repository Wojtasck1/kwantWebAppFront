import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppConfig} from '../config/app.config';

import {TasksComponent} from './tasks.component'; 
import {TasksTabComponent} from './tasks-tab/tasks-tab.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';

// import {HeroListComponent} from './hero-list/hero-list.component';
// import {HeroDetailComponent} from './hero-detail/hero-detail.component';
// import {HeroesComponent} from './heroes.component';
 
const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {path: '', component: TasksTabComponent},
      {path: ':id', component: TaskDetailComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(tasksRoutes)
  ],
  exports: [ 
    RouterModule
  ]
})

export class TasksRoutingModule {
}
