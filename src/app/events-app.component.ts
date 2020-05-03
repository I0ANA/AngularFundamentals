import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
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
export class EventsAppComponent {
  title = 'ng-fundamentals';
}