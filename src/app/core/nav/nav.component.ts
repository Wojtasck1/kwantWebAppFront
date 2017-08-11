import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {IAppConfig} from '../../config/iapp.config';
import {ProgressBarService} from '../../shared/services/progress-bar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  appConfig: any;
  menuItems: any[];
  progressBarMode: string;

  private translateService: TranslateService;

  constructor(@Inject(APP_CONFIG) appConfig: IAppConfig, private progressBarService: ProgressBarService, translateService: TranslateService) {
    this.appConfig = appConfig;
    this.translateService = translateService;
    this.loadMenus();

    this.progressBarService.updateProgressBar$.subscribe((mode) => {
      this.progressBarMode = mode;
    });
  }

  changeLanguage(language: string): void {
    this.translateService.use(language).subscribe(() => {
      this.loadMenus();
    });
  } 

  private loadMenus(): void {
    this.translateService.get(['home', 'heroesList', 'cars', 'tasks' , 'users'], {}).subscribe((texts: string) => {
      this.menuItems = [
        {link: '/', name: texts['home']},
        {link: '/' + AppConfig.routes.heroes, name: texts['heroesList']},
        {link: '/' + AppConfig.routes.cars, name: texts['cars']},
        {link: '/' + AppConfig.routes.tasks, name: texts['tasks']}, 
        {link: '/' + AppConfig.routes.users, name: texts['users']}
      ];
    });
  }
}
