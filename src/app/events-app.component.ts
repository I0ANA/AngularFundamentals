import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  // adding routes and the <router-outlet> component in the events-app means we can navigate directly to the events-app so the selector is no longer needed
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    
    <!-- by using <router-outlet> component directive we tell angular to match witchever route mathces our url, 
    not redirect to a specific <component-selector> -->
    <router-outlet></router-outlet>
  `
  
  /*`
  <h1>Hello from events-app.component.ts </h1>
  <img src="/assets/images/basic-shield.png"/> 
  <!-- this path is relative to the index.html file-->
  <!-- this path is recognised becasue in the angular.json file we have declared the "assets" path under architect: options: "assets": [
    "src/favicon.ico",
    "src/assets"
  ],
  
  General styles are delared here as well, vs component deplared styles which apply just to the component (?? and )
  
  -->
  `
   */
})
export class EventsAppComponent 
implements OnInit 
{
  constructor(private auth:AuthService){}

  ngOnInit(): void {
    this.auth.checkAuthenticationStatus()  
  } 
}