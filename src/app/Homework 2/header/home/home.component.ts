import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SidebarComponent, HeroComponent]
})
export class HomeComponent {

}
