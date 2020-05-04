//Routes is not mandatory but it takes advantage ot the Typescript strongly types feature
import { Routes } from '@angular/router'

import { EventsListComponent} from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-detail.component'
import { CreateEventComponent } from './events/create-event.component'

export const appRoutes:Routes = [
    //the order of the routes matter: the /new path and the /:id path can't be distinguished by angular 
    //so having /new after /:id will make angular believe we are trying to pass 'new' as id parameter
    {path: 'events/new', component: CreateEventComponent },
    {path: 'events', component: EventsListComponent },
    {path: 'events/:id', component: EventDetailsComponent },
    //{path: 'events/new', component: CreateEventComponent },
    {path: '', redirectTo: '/events', pathMatch: 'full' } 
    //pathMatch options:
    //prefix --> redirect if the URL starts with the specified path string 
    //full --> redirect if the URl FULLY matches the specified path string 
]