import { Component, OnInit, Inject } from '@angular/core'
import { EventService } from './shared/event.service'
// import { ToastrService } from '../common/toastr-with-wrapper.service'
// import {TOASTR_TOKEN, IToastr } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/event.model'

@Component({
    // adding routes and the <router-outlet> component in the events-app means we can navigate directly to the events-app so the selector is no longer needed
    // selector:'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let thisEvent of events" class="col-md-5">
                <!--event-thumbnail (click)="handleThumbnailClick(thisEvent.name)" -->
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
export class EventsListComponent 
//take advantage of Typescript and let angular know this Component is implementing ngOnInit by adding it, not mandatory
//this offers type compilation safety
implements OnInit {
  
    testInput:string = ''
    events:IEvent[]

    constructor(private eventService:EventService,  /*private toastr:ToastrService @Inject(TOASTR_TOKEN) private toastr:IToastr,,*/ private route:ActivatedRoute) {
    }

    handleClickInChild(data) {
        console.log('in parent event received: ' + data)
    }

    //Components have lifecycle hooks eg ngOnInit()
    //it is not a good idea to add long running calls in the constructor 
    ngOnInit(){
        //no longer needed becasue we are preloading the data in a resolver, which returns the events, 
        //and the angular route resolve parameter takest the events and appends them to the route, so we need the activated route
        //this.eventService.getEvents().subscribe( events => { this.events = events } )

        this.events = this.route.snapshot.data['events']
    }
/*
    handleThumbnailClick(eventName){
      this.toastr.success(eventName, 'test title')
    }*/
}