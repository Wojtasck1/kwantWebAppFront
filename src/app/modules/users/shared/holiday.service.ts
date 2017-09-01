import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { APP_CONFIG } from '../../../config/app.config';
import { IAppConfig } from '../../../config/iapp.config';

import { Holiday } from './holiday.model';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class HolidayService {
    request$: EventEmitter<any>;

    private headers: HttpHeaders;
    private holidayUrl: string;
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

        this.holidayUrl = this.appConfig.endpoints.holidays;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
            'value': this.appConfig.votesLimit
        }).subscribe((texts) => {
            this.translations = texts;
        });
    }

    getAllHolidays(): Observable<Holiday[]> {
        this.request$.emit('starting');
        return this.http.get(this.holidayUrl)
            .map(response => {
                this.request$.emit('finished');
                return response;
            })
            .catch(this.handleError);
    }

    getHolidayByUserId(userId: number): Observable<Holiday[]> {
        this.request$.emit('starting');
        return this.http.get(this.holidayUrl + 'userId/' + userId)
            .map(response => {
                this.request$.emit('finished');
                return response;
            })
            .catch(this.handleError);
    }

    createHoliday(holiday: any): Observable<Holiday> {
        this.request$.emit('starting');
        return this.http
            .post(this.holidayUrl, JSON.stringify({
                userId: holiday.userId,
                holidayType: holiday.holidayType,
                createDate: holiday.createDate + "000",
                beginDate: holiday.beginDate,
                endDate: holiday.endDate
            }), { headers: this.headers })
            .map(response => {
                this.request$.emit('finished');
                this.showSnackBar('heroCreated');
                return response;
            })
            .catch(this.handleError);
    }

    deleteUsersById(id: string): Observable<Array<Holiday>> {
        this.request$.emit('starting');
        const url = `${this.holidayUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
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