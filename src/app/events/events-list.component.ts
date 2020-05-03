import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector:'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let thisEvent of events" class="col-md-5">
                <event-thumbnail 
                    #templateVariable
                    (eventClick)="handleClickInChild($event)" 
                    [event]="thisEvent" >
                </event-thumbnail>

                <!-- This (eventClick) binds to the @Output property in the child component <event-thumbnail>;
                the @Output eventClick property is an event so we bind with () not with []

                !! $event -> this is the data emited from the event-thumbnail component, you can only pass in one data set so 
                if you have multiple values you must wrap/bundle them in one object
                -->
                <!--button type="button" class="btn btn-danger" (click)="templateVariable.logFoo()">Click to log Foo</button-->
                <!-- Define and use #templateVariable template variable to access public methods and properties in child component -->
                <!--  It only works inside the same scope div, if moved outside the div the component is deplared in, it does not work-->
        
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent {
    testInput:string = ''
    events:any[]

    constructor(private eventService:EventService) {
      this.events = this.eventService.getService()
    }

    handleClickInChild(data) {
        console.log('in parent event received: ' + data)
    }
}