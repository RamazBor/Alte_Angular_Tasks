import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    new User('Robert Nepert', 'Male', 'Monthly', 'Active'),
    new User('Kely Miler', 'Female', 'Yearly', 'Inactive'),
    new User('Rafael Neder', 'Male', 'Quaterly', 'Active'),
  ];

  constructor(private logger: LoggerService) {}

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  GetAllUsers() {
    return this.users;
  }

  CreateUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.unshift(user);
    this.logger.LogMessage(name, status);
  }

  OnShowUserDetails(user: User) {
    this.OnUserDetailsClicked.emit(user);
  }
}
