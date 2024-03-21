import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { UserService } from './Homework 2/Services/user.service';
import { SubscribeService } from './Homework 2/Services/subscribe.service';

// CREATE INJECTION TOKEN, YOU CAN HAVE ANY NAME INSTEAD 'USER_SERVICE'
export const USER_TOKEN = new InjectionToken<UserService>('USER_SERVICE');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    SubscribeService,
    {provide: USER_TOKEN, useClass: UserService}
  ]
};
