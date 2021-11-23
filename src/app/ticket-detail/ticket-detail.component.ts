import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  ticket: any;
  errorText: string = '';

  constructor(private route: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    const resolvedTicket = this.route.snapshot.data['ticket'];
    if (typeof resolvedTicket === 'string') {
      this.errorText = resolvedTicket;
    } else {
      this.ticket = resolvedTicket.ticket;
    }
    console.log(this.ticket);
  }

}
