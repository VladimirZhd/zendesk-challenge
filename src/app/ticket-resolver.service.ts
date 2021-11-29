import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators"
import { TicketService } from './ticket.service';

@Injectable({
    providedIn: 'root'
})
export class TicketResolverService implements Resolve<any> {

    constructor(private ticketService: TicketService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> | Observable<any> | any {
        const id = route.paramMap.get('id');
        // If there is an id in the url params resolve a single ticket
        if (id) {
            return this.ticketService.getTicketInfo(id).pipe(
                catchError((err: string) => of(err))
            )
            // Resolve all tickets
        } else {
            return this.ticketService.getAllTickets().pipe(
                catchError((err: string) => of(err))
            )
        }
    }
}
