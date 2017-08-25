import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from './../shared/task.model';
import { TaskService } from './../shared/task.service';
import { Router } from '@angular/router';
import { AppConfig } from '../../config/app.config';

@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrls: ['./tasks-tab.component.css']
})
export class TasksTabComponent implements OnInit {

  tasks: Task[];

  @ViewChild('form') myNgForm;

  constructor(private taskService: TaskService,
    private router: Router, ) {

    this.taskService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks.sort((a, b) => {
        return b.taskId - a.taskId;
      })
    })
  }

  seeTasDetails(task) {
    this.router.navigate([AppConfig.routes.tasks + '/' + task.taskId]);
  }

  ngOnInit() {
  }
}
