import { Component } from '@angular/core';
import { Task } from './../shared/task.model';
import { TaskService } from './../shared/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {

  task: Task;

  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.taskService.getTask(params['id']).subscribe((task) => {
        this.task = task;
      });
    });
  }
}
