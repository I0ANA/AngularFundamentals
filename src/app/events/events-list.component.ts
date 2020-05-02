import { Component } from '@angular/core'

@Component({
    selector:'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <event-thumbnail 
            (eventClick)="handleClickInChild($event)" 
            [event]="event1" ></event-thumbnail>
            <!-- This (eventClick) binds to the @Output property in the child component <event-thumbnail>;
            the @Output eventClick property is an event so we bind with () not with []

            !! $event -> this is the data emited from the event-thumbnail component, you can only pass in one data set so 
            if you have multiple values you must wrap/bundle them in one object
            -->
        </div>
    `
})
export class EventsListComponent {

    event1 = {
        id: 1, 
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
    
    handleClickInChild(data) {
        console.log('in parent event received: ' + data)
    }
}