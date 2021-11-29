import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponent } from './app.routing';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsService } from './services/tickets.service';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    routingComponent,
    TicketsComponent
  ],
  bootstrap: [AppComponent],
  providers: [TicketsService]
})
export class AppModule { }
