import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { catchError } from 'rxjs/operators'
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private ticketsService: TicketsService) { }

  public config: any;
  public allTickets: any = {};
  public singleTicket: any;
  public pageSize: number = 25;
  public currentPage: number = 0;
  public isActive = false;

  public pageChanged(event: any) {
    this.config.currentPage = event;
  }

  ngOnInit(): void {
    this.getAllTickets();
  }
  public getAllTickets(): Tickets {
    this.ticketsService.getTicketsApi().pipe(
      catchError(this.handleErrors)
    ).subscribe((response: Tickets) => {
      this.isActive = true;
      this.config = {
        itemsPerPage: this.pageSize,
        currentPage: this.currentPage,
        totalItems: response.tickets.length
      };
      this.allTickets = response.tickets;
    });
    return;
  }

  public handleErrors(result: any): any {
    if (!result.ok) {
      switch (result.status) {
        case 400:
          document.getElementById("errors").innerHTML = result.statusText + ': Invalid Ticket';
        case 401:
          document.getElementById("errors").innerHTML = result.statusText + 'Authentication error';
        case 404:
          document.getElementById("errors").innerHTML = result.statusText + ': Cannot find the ticket';
        default:
          document.getElementById("errors").innerHTML = result.statusText;
      }
    }
    return result;
  }
}
