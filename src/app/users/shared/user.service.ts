import {EventEmitter, Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {APP_CONFIG} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';

import {User} from './user.model';
import {Observable} from 'rxjs/Observable';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class UserService {
  request$: EventEmitter<any>;

  private headers: HttpHeaders;
  private usersUrl: string;
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

    this.usersUrl = this.appConfig.endpoints.users;
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
      'value': this.appConfig.votesLimit
    }).subscribe((texts) => {
      this.translations = texts;
    });
  }

  getAllUsers(): Observable<User[]> {
    this.request$.emit('starting');
    console.log(this.http.get(this.usersUrl));
    return this.http.get(this.usersUrl)
      .map(response => {
        this.request$.emit('finished');
        return response;
      })
      .catch(this.handleError);
  }

  getUserById(userId: string): Observable<User> {
    this.request$.emit('starting');
    return this.http.get(this.usersUrl + '/' + userId)
      .map(response => {
        this.request$.emit('finished');
        return response;
      })
      .catch(this.handleError);
  }

  createUsers(user: any): Observable<User> {
    this.request$.emit('starting');
    return this.http
      .post(this.usersUrl, JSON.stringify({
        name: user.name,
        surname: user.surname,
        email: user.email,

      }), {headers: this.headers})
      .map(response => {
        this.request$.emit('finished');
        this.showSnackBar('heroCreated');
        return response;
      })
      .catch(this.handleError);
  }

  checkIfUserCanVote(): boolean {
    return Number(localStorage.getItem('votes')) < this.appConfig.votesLimit;
  }

  deleteUsersById(id: string): Observable<Array<User>> {
    this.request$.emit('starting');
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map((response) => {
        this.request$.emit('finished');
        this.showSnackBar('heroRemoved');
        return response;
      }) 
      .catch(this.handleError);
  }

  showSnackBar(name): void {
    const config: any = new MdSnackBarConfig();
    config.duration = this.appConfig.snackBarDuration;
    this.snackBar.open(this.translations[name], 'OK', config);
  }
}
