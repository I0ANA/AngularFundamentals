//Routes is not mandatory but it takes advantage ot the Typescript strongly types feature
import { Routes } from '@angular/router'

import { EventsListComponent} from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-detail.component'

export const appRoutes:Routes = [
    {path: 'events', component: EventsListComponent },
    {path: 'events/:id', component: EventDetailsComponent },
    {path: '', redirectTo: '/events', pathMatch: 'full' } 
    //pathMatch options:
    //prefix --> redirect if the URL starts with the specified path string 
    //full --> redirect if the URl FULLY matches the specified path string 
]