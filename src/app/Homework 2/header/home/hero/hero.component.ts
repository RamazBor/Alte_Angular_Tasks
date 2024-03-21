import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  subService = inject(SubscribeService);

  OnSubscribe() {
    this.subService.OnSubscripeClicked('yearly');
 }
}
