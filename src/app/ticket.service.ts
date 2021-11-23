import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets: [] = [];
  rootURL: string = `${window.location.protocol}//${window.location.hostname}:8080`;

  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<any> {
    return this.http.get(`${this.rootURL}/tickets`);
  }

  getTicketInfo(id: any): Observable<any> {
    return this.http.get(`${this.rootURL}/tickets/${id}`);
  }

  getPage(page: number): Observable<any> {
    return this.http.get(`${this.rootURL}/tickets?page=${page}`);
  }
}
