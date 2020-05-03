import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    selector:'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let thisEvent of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(thisEvent.name)"
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
    events:any[]

    constructor(private eventService:EventService, private toastr:ToastrService) {
    }

    handleClickInChild(data) {
        console.log('in parent event received: ' + data)
    }

    //Components have lifecycle hooks eg ngOnInit()
    //it is not a good idea to add long running calls in the constructor 
    ngOnInit(){
      this.events = this.eventService.getService()
    }

    handleThumbnailClick(eventName){
      this.toastr.success(eventName, 'test title')
    }
}