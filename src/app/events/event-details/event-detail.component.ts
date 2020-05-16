import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router' 
import { IEvent, ISession } from '../shared/index'

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        `
        .container { padding-left: 20px; padding-right:20px; }
        .event-image { height: 100px }
        a { cursor: pointer }
        `
    ]

})
export class EventDetailsComponent {
    event:IEvent
    addMode: boolean
    filterBy: string = 'all'

    constructor(private eventService:EventService, private route:ActivatedRoute){ }

    ngOnInit() {
        //we need to subscribe to the params of the router so when we navigate within the same component the page details gets updated,
        // not just the url parameter
        // this.route.params.forEach((params:Params) => {
        //     this.eventService.getEvent(+params['id']).subscribe(
        //         (event:IEvent) => {
        //             this.event = event
        //             //move line here so to change the addMode only if the call is succesfull
        //             this.addMode = false
        //         })
        //     //we need to reset all the statuses of the page
        //     // this.addMode = false
        //     //filter and sorting??
        // })
        // cast to a number using + 
        // snaphot.params gives us the params used to access this Component
        // this.event = this.eventService.getEvent( +this.route.snapshot.params['id'] )

        //get data from resolver which adds the preloaded data to the route

        this.route.data.forEach( data => {
            this.event = data['event']
            //the 'event' name is set int he routes in the resolve: { event: EventResolver} }
            this.addMode = false
        })
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session:ISession){
        const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id))

        session.id = maxId + 1
        this.event.sessions.push(session)
        this.eventService.saveEvent(this.event).subscribe()
        this.addMode = false
    }

    cancelAddSession(){
        this.addMode = false
    }
}