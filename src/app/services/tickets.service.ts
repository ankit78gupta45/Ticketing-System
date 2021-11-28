import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketsService {
    constructor(
        private http: HttpClient
    ) {
        this.headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('Authorization', 'Bearer ' + 'e27df8cf49deadb9500789aa26ad2941c88854dc5ad0096f429ba6191ee202f9');
    }

    public headers : HttpHeaders;
    public getTicketsApi(): Observable<any> {
        const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('Authorization', 'Bearer ' + 'e27df8cf49deadb9500789aa26ad2941c88854dc5ad0096f429ba6191ee202f9');
        
        const url = 'https://zccstudents4333.zendesk.com/api/v2/tickets.json?per_page=25';

        return this.http.get<any>(url, {headers : headers});
    }

    public getTicketByIdApi(ticketId): Observable<any> {
        let url = `https://zccstudents4333.zendesk.com/api/v2/tickets/${ticketId}.json`

        return this.http.get<any>(url, {headers : this.headers});
      }
}
