import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    rootURL: string = `${window.location.protocol}//${window.location.hostname}:8080`;

    constructor(private http: HttpClient) { }

    /**
     * Make a call to the API to retrieve user data
     * @param id id of a requester or a assignee
     * @returns Observable with user data
     */
    getUser(id: number): Observable<any> {
        return this.http.get(`${this.rootURL}/users/${id}`);
    }
}
