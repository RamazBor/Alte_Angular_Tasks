import { Component, Inject } from '@angular/core';
import { User } from '../../../Models/User';
import { USER_TOKEN } from '../../../../app.config';
import { UserService } from '../../../Services/user.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService: UserService) {}
  userList: User[] = this.userService.GetAllUsers();

  ShowUserDetails(user: User) {
    this.userService.OnShowUserDetails(user);
  }
}
