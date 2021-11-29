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

    /**
     * Make a call to the API to retrieve all tickets for an organization
     * @returns Observable with tickets data
     */
    getAllTickets(): Observable<any> {
        return this.http.get(`${this.rootURL}/tickets`);
    }

    /**
     * Make a call to the API to retrieve a single ticket data
     * @param id a ticket id
     * @returns Observable with a single ticket data
     */
    getTicketInfo(id: any): Observable<any> {
        return this.http.get(`${this.rootURL}/tickets/${id}`);
    }

    /**
     * Make a call to retrieve next/previous 25 tickets
     * @param page page number for pagination
     * @returns Observable with tickets data
     */
    getPage(page: number): Observable<any> {
        return this.http.get(`${this.rootURL}/tickets?page=${page}`);
    }
}
