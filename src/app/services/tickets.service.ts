import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer ' + ACCESS_TOKEN);
  }

  public headers: HttpHeaders;
  public getTicketsApi(): Observable<Tickets> {
    const url = 'https://zccstudents4333.zendesk.com/api/v2/tickets.json';

    return this.http.get<Tickets>(url, { headers: this.headers });
  }
}
