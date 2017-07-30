import { Component } from '@angular/core';

@Component({
  selector: 'pi-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
  loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }
}
