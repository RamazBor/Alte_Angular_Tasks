import { Component, Inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { USER_TOKEN } from '../../../app.config';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  imports: [FormsModule, UserListComponent, UserDetailsComponent, NgClass],
})
export class AdminComponent {
  clicked: boolean = true;

  constructor(@Inject(USER_TOKEN) private userService: UserService) {}

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser() {
    if (!this.name.match(/[a-z A-Z]/)) {
      alert('Please, fill in UserName Field!');
    } else {
      this.userService.CreateUser(
        this.name,
        this.gender,
        this.subType,
        this.status
      );
    }
  }
}
