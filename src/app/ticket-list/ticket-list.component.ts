import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
    tickets: any[] = [];
    next: boolean = false;
    prev: boolean = false;
    total_count: number = 0;
    count: number = 0;
    data: any;


    constructor(private ticketService: TicketService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        // Get all tickets on page initiation
        this.ticketService.getAllTickets().subscribe(async (data: any) => {
            this.data = data;
            this.tickets = await data.tickets;
            if (data.next_page) this.next = true;
            if (data.previous_page) this.prev = true;
            this.total_count = data.count;
            this.count = this.tickets.length;
        });
    }

    /**
     * Get a next/previous page in the ticket list view
     * @param direction : next/previous page;
     */
    changePage(direction: string) {
        let page = 0;
        if (direction === 'next') {
            //get next page number
            page = this.data.next_page.split('=')[1].split('&')[0];
        } else {
            // get previous page number
            page = this.data.previous_page.split('=')[1].split('&')[0];
        };
        // read tickets for the page number retrieved earlier
        this.ticketService.getPage(page).subscribe((data: any) => {
            this.data = data;
            this.tickets = data.tickets;
            if (data.next_page) this.next = true;
            if (data.previous_page) this.prev = true;
            if (direction === 'next') {
                this.count += this.tickets.length;
            } else {
                this.count -= this.tickets.length;
            }
        });
    }
}
