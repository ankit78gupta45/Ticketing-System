import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'body',
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-brand" style="color: #ff8000" >Zendesk Ticketing System</div>
    <div class="collapse navbar-collapse" [ngClass]="{ 'show': true }">
    <ul class="navbar-nav mr-auto">
    <li><a class="nav-link" id="homeId" routerLink="" routerLinkActive="active">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" id = "ticketId" style = "cursor: pointer" routerLink="/tickets" routerLinkActive="active">Tickets </a>
      </li>
    </ul>
    </div>
</nav>
<h6 *ngIf = "router.url != '/tickets'" style="margin: 15px; margin-top:50px;color: blue" > Click on <span style="color:red">Tickets</span> to see Zendesk Ticketing system </h6>
  <router-outlet></router-outlet>`,
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router
  ) {
  }

  ngOnInit() { }
}
