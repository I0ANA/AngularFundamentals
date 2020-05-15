import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver 
// in the resolve method we would make an async call, like an Ajax call,
// and then when it returns it will return that data
implements Resolve<any> {

    constructor(private eventService:EventService) { }

    resolve() {
        // tipically when you listen to an observable you call subscribe() but becasue this is in an Resolver, 
        //  we have to return the observable to Angular so angular can watch the observable and know when it finishes
        return this.eventService.getEvents()

        //a resolver automatically subscribes to an observable call that he gets, so no need to add .subscribe
        //getEvents returns an Observable<IEvent[]> 

        //the http request will not happen till it has a subscriber
        //resolver subscribes automatically, but if call is made from another service and it does not have .subscribe(), then the requets wwill not be triggered 
    }
}