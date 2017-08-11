import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/modules/shared.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks.component';
import { TasksTabComponent } from './tasks-tab/tasks-tab.component'
import { TasksTopComponent } from './tasks-top/tasks-top.component'; 
import { TasksRoutingModule } from './tasks-routing.module';

// import {HeroListComponent, RemoveHeroDialogComponent} from './hero-list/hero-list.component';
// import {HeroService} from './shared/hero.service';
// import {HeroDetailComponent} from './hero-detail/hero-detail.component';
// import {HeroesComponent} from './heroes.component';

@NgModule({
  imports: [
    TasksRoutingModule,
    // CommonModule,
    // FormsModule, 
    // SharedModule,
    // HeroRoutingModule,
    // ReactiveFormsModule
  ],   
  declarations: [
    // HeroesComponent,
    // HeroListComponent,
    // RemoveHeroDialogComponent,
    // HeroDetailComponent
    TaskDetailComponent,
    TasksTabComponent,
    TasksComponent],
  entryComponents: [
    // RemoveHeroDialogComponent
  ],
  providers: [
    // HeroService
  ]
})

export class TasksModule {
}
