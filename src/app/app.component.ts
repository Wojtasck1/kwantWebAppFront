import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

import {NavigationEnd, Router} from '@angular/router';
import {AppConfig} from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  private translateService: TranslateService;

  constructor(translateService: TranslateService,
              private title: Title,
              private meta: Meta,
              private router: Router) {

    this.translateService = translateService;
    this.translateService.setDefaultLang('pl');
    this.translateService.use('pl');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.title.setTitle('Kwant App');
            this.meta.updateTag({
              name: 'description',
              content: 'Angular 4 app with Angular CLI, Angular Material and more'
            });
            break;
          case '/' + AppConfig.routes.heroes:
            this.title.setTitle('Heroes list');
            this.meta.updateTag({
              name: 'description',
              content: 'List of super-heroes'
            });
            break;
          case '/' + AppConfig.routes.cars:
            this.title.setTitle('Cars list');
            this.meta.updateTag({
              name: 'description',
              content: 'List of tasks'
            });
            break;
          case '/' + AppConfig.routes.usrs:
            this.title.setTitle('users list');
            this.meta.updateTag({
              name: 'description', 
              content: 'List of users' 
            });
            break;
        }
      }
    });
  }
}
