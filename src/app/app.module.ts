import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent, 
  EventThumbnailComponent, 
  CreateEventComponent, 
  EventListResolver, 
  EventDetailsComponent, 
  EventRouteActivator, 
  EventService, 
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe} from './events/index'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// import { ToastrService } from './common/toastr-with-wrapper.service'
import {  
  JQUERY_TOKEN, 
  TOASTR_TOKEN, IToastr, 
  CollapsibleWellComponent, 
  CollapsibleWellWitSlots as CollapsibleWellWithSlots, 
  CollapsibleWellWithThreeSlots} from './common/index'

//this tells Typescript thet we know there is a global variable created by importing the /toast.min.js script, so no need to worry about it
// declare let toastr: IToastr
let toastr:IToastr = window['toastr']
let jQuery = window['$']

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    CollapsibleWellWithSlots,
    CollapsibleWellWithThreeSlots,
    DurationPipe
  ],
  //register service with angular so Angular will provide an instance of the object where the service is injected
  providers: [
    EventService, 
    // ToastrService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jQuery},
    EventRouteActivator, //EventRouteActivator this is the short hand form for declaring a provider
    //register afunction as a provider in a module, usign the long hand syntax for deplaring a provider
    //when <requested> use <service>
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }, 
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState(component: CreateEventComponent) {
  //this guard is based on the state of the component 
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  
  return true
}