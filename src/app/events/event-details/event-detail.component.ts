import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router' 
import { IEvent } from '../shared/event.model'

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px }
        `
    ]

})
export class EventDetailsComponent {
    event:IEvent

    constructor(private eventService:EventService, private route:ActivatedRoute){ }

    ngOnInit() {
        // cast to a number using + 
        // snaphot.params gives us the params used to access this Component
        this.event = this.eventService.getEvent( +this.route.snapshot.params['id'] )
    }
}