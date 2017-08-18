import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/modules/shared.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks.component';
import { TasksTabComponent } from './tasks-tab/tasks-tab.component'
import { TasksTopComponent } from './tasks-top/tasks-top.component'; 
import { TasksRoutingModule } from './tasks-routing.module';

import { HttpModule } from '@angular/http';
import { DataSource } from '@angular/cdk';
import { MdTableModule } from '@angular/material';
import { MdSortModule , MdIconModule } from '@angular/material'; 
import { CdkTableModule } from '@angular/cdk';


@NgModule({
  imports: [
    TasksRoutingModule,
    CdkTableModule,
    MdSortModule,
    MdIconModule,
    MdTableModule,
    HttpModule,
  ],   
  declarations: [
    TaskDetailComponent,
    TasksTabComponent,
    TasksComponent],
  entryComponents: [
  ],
  providers: [
  ]
})

export class TasksModule {
}
