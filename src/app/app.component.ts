import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'body',
  template: `<nav>
  <ul>
    <li><a routerLink="/tickets" routerLinkActive="active">Tickets</a></li>
  </ul>
</nav>
  <router-outlet></router-outlet>`,
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {}
}
