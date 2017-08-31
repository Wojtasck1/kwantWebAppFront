
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/modules/shared.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksComponent } from './tasks.component';
import { TasksTabComponent } from './tasks-tab/tasks-tab.component'
import { TasksTopComponent } from './tasks-top/tasks-top.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskService } from './shared/task.service';

import { HttpModule } from '@angular/http';
import { DataSource } from '@angular/cdk';
import { MdTableModule , MdSortModule, MdIconModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';


@NgModule({
  imports: [
    TasksRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MdTableModule,
    MdSortModule,
    MdIconModule,
    CdkTableModule,
  ],
  declarations: [
    TaskDetailComponent,
    TasksTabComponent,
    TasksComponent],
  entryComponents: [
  ],
  providers: [
    TaskService
  ]
})

export class TasksModule {
}
