import { Injectable, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONFIG } from '../../config/app.config';
import { IAppConfig } from '../../config/iapp.config';
import { TranslateService } from '@ngx-translate/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Task } from './task.model';


@Injectable()
export class TaskService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private tasksUrl: string;
  private translations: any;

  private handleError(error: any): Promise<any> {
    this.request$.emit('finished');
    return Promise.reject(error.message || error);
  }

  constructor(private http: HttpClient,
    private translateService: TranslateService,
    private snackBar: MdSnackBar,
    @Inject(APP_CONFIG) private appConfig: IAppConfig) {
    this.request$ = new EventEmitter();

    this.tasksUrl = this.appConfig.endpoints.cars;
    //this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
    //   'value': this.appConfig.votesLimit
    // }).subscribe((texts) => {
    //   this.translations = texts;
    // });
  }

  getAllTasks(): Observable<any[]> {
    this.request$.emit('starting');
    return this.http.get(this.tasksUrl)
      .map(response => {
        this.request$.emit('finished');
        return response;
      })
      .catch(this.handleError);
  }
}