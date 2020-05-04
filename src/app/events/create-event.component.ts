import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({ 
    template:`
        <h1>New Event</h1>
        <hr>
        <div>
            <h3> ...crete event -- this will be a form </h3>
            <br />
            <button type="submit" class="btn btn-primary">Save</button>

            <!-- Navigate from HTML -->
            <button type="button" class="btn btn-default" [routerLink]="['/events']">Cancel (Navigate from HTML)</button>

            <!-- Navigate from code --> 
            <button type="button" class="btn btn-default ml-2" (click)="cancel()">Cancel (Navigate from code)</button>

        </div>
    `
})
export class CreateEventComponent
{
    isDirty: boolean = true
    constructor (private router: Router){
        
    }

    cancel(){
        this.router.navigate(['/events'])
    }
} 