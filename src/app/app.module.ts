import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-detail.component'

import { appRoutes } from './routes'

import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component    
  ],
  //register service with angular so Angular will provide an instance of the object where the service is injected
  providers: [
    EventService, 
    ToastrService,
    EventRouteActivator, //EventRouteActivator this is the short hand form for declaring a provider
    //register afunction as a provider in a module, usign the long hand syntax for deplaring a provider
    //when <requested> use <service>
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState() {

  return false 
}