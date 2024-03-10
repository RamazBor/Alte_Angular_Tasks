import { Component } from '@angular/core';
import { Role, User } from '../interfaces/interface';
import { NgFor } from '@angular/common';
import { NgStyleDirective } from '../Directives/ng-style.directive';
import { NgIfDirective } from '../Directives/ng-if.directive';

@Component({
  selector: 'app-homework1',
  standalone: true,
  imports: [NgFor, NgStyleDirective, NgIfDirective],
  templateUrl: './homework1.component.html',
  styleUrl: './homework1.component.scss'
})
export class Homework1Component {

  users: User[] = [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Stich',
      isActive: true,
      role: Role.Admin
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      isActive: false,
      role: Role.User
    },
    {
      id: 3,
      firstName: 'Klide',
      lastName: 'Mey',
      isActive: false,
      role: Role.User
    },
    {
      id: 4,
      firstName: 'Peter',
      lastName: 'Parker',
      isActive: true,
      role: Role.User
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Scofield',
      isActive: true,
      role: Role.Guest
    },
    {
      id: 6,
      firstName: 'Emory',
      lastName: 'Nolasco',
      isActive: false,
      role: Role.Guest
    }
  ];
}
