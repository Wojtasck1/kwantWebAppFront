import {EventEmitter, Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {APP_CONFIG} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';

import {CarNote} from './carNote.module';
import {Observable} from 'rxjs/Observable';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class CarNoteService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private carsNotesUrl: string;
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

    this.carsNotesUrl = this.appConfig.endpoints.carNotes;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
      'value': this.appConfig.votesLimit
    }).subscribe((texts) => {
      this.translations = texts;
    });
  }

    getCarNotesByCarId(carId: number): Observable<CarNote> { 
      this.request$.emit('starting');
      return this.http.get(this.carsNotesUrl + '/' + carId)
        .map(response => {
          this.request$.emit('finished');
          return response;
        })
        .catch(this.handleError);
    }
}