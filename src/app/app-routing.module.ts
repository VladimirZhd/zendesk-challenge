import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketResolverService } from './ticket-resolver.service';

const routes: Routes = [
    { path: '', component: TicketListComponent, pathMatch: 'full' },
    { path: 'tickets', component: TicketListComponent, resolve: { ticket: TicketResolverService } },
    { path: 'tickets/:id', component: TicketDetailComponent, resolve: { ticket: TicketResolverService } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
