import { Component, OnInit, inject } from '@angular/core';
import { USER_TOKEN } from '../../../../app.config';
import { User } from '../../../Models/User';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  selectedUser!: User;
  userService = inject(USER_TOKEN);

  ngOnInit() {
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
    });
  }
}
