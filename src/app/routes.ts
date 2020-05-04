//Routes is not mandatory but it takes advantage ot the Typescript strongly types feature
import { Routes } from '@angular/router'

import { EventsListComponent} from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-detail.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

export const appRoutes:Routes = [
    //the order of the routes matter: the /new path and the /:id path can't be distinguished by angular 
    //so having /new after /:id will make angular believe we are trying to pass 'new' as id parameter
    //create a canDeactivate guard using a function, not a service
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {path: 'events', component: EventsListComponent },

    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },

    //{path: 'events/new', component: CreateEventComponent },
    {path: '404', component: Error404Component },
    {path: '', redirectTo: '/events', pathMatch: 'full' } 
    //pathMatch options:
    //prefix --> redirect if the URL starts with the specified path string 
    //full --> redirect if the URl FULLY matches the specified path string 
]