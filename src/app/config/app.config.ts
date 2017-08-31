import {OpaqueToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new OpaqueToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    heroes: 'heroes',
    cars: 'cars',
    tasks: 'tasks',
    users: 'users',
  }, 
  endpoints: { 
    heroes: 'https://nodejs-example-app.herokuapp.com/heroes', 
    users: 'http://localhost:8080/api/v1/users/',
    tasks: 'http://localhost:8080/api/v1/tasks',
    cars: 'http://localhost:8080/api/v1/cars/',
    carNotes: 'http://localhost:8080/api/v1/carNotes/',
    holidays: 'http://localhost:8080/api/v1/holidays/',
  },
  votesLimit: 3,
  topHeroesLimit: 9,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Ismaestro/angular4-example-app'
};
