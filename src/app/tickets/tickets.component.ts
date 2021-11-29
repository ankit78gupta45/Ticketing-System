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

  public handleErrors(result: any): string {
    let errorRes = "";
    if (!result.ok) {
      switch (result.status) {
        case 400:
          errorRes = result.statusText + ': Invalid Ticket';
          break;
        case 401:
          errorRes = result.statusText + 'Authentication error';
          break;
        case 404:
          errorRes = result.statusText + ': Cannot find the ticket';
          break;
        default:
          errorRes = result.statusText;
      }

      document.getElementById("errors").innerHTML = errorRes;
    }

    return errorRes;
  }
}
