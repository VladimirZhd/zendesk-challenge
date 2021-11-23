import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
    ticket: any;
    errorText: string = '';
    user: any;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const resolvedTicket = this.route.snapshot.data['ticket'];
        if (typeof resolvedTicket === 'string') {
            this.errorText = resolvedTicket;
        } else {
            this.ticket = resolvedTicket.ticket;
            this.userService
                .getUser(this.ticket.requester_id)
                .subscribe((data: any) => {
                    this.user = data.user;
                });
        }
    }

    clickBack() {
        this.router.navigate(['/tickets'], { relativeTo: this.route });
    }
}
