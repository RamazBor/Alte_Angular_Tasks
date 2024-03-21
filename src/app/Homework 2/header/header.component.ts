import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';
import { NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgSwitch, NgSwitchCase, HomeComponent, AdminComponent, NgStyle],
})
export class HeaderComponent {
  selectedTab: string = 'home';

  HomeClicked() {
    this.selectedTab = 'home';
  }

  AdminClicked() {
    this.selectedTab = 'admin';
  }

  OnSubscribe() {
    let subService = new SubscribeService();
    subService.OnSubscripeClicked('monthly');
  }
}
