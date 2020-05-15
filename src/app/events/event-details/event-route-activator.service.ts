import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable }  from '@angular/core'
import { EventService } from '../shared/event.service'
//this should be deleted, no longer used  
@Injectable()
export class EventRouteActivator 
//implements CanActivate
 { 

    // constructor(private eventService:EventService, private router:Router){
    // }

    // canActivate(route: ActivatedRouteSnapshot) {

    //     //cast to boolean using !!
    //     const eventExists = !!this.eventService.getEvent(+route.params['id'])

    //     if(!eventExists)
    //         this.router.navigate(['/404'])

    //     //we need to return the guard result, if not exist then redirect, otherwise return true
    //     return eventExists
    // }
}