import { Component, OnInit} from '@angular/core'
import { AuthService } from '../user/auth.service'
import { ISession, EventService, IEvent } from '../events'

@Component({
    selector:'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [
        `
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width:1200px) {
            #searchForm { display:none }
        }
        li > a.active { color: #F97924; }
        `
    ]
})

export class NavBarComponent implements OnInit {
    searchTerm: string = ''
    foundSessions: ISession[] 
    events: IEvent[] = []

    //declared to be accessed in the template
    constructor(private auth:AuthService, private eventService:EventService){ }
    ngOnInit(): void {
        this.getEvents()
    }

    searchSession(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe( sessions => this.foundSessions = sessions)
        // console.log(this.foundSessions)
    }

    getEvents(){
        this.eventService.getEvents()
        .subscribe( data => 
            this.events = data)
    }
}