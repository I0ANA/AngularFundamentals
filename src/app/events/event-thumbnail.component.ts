import {Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div> Date: {{event.date}}</div>
        <div> Time: {{event.time}}</div>
        <div> Price: \${{event.price}}</div>
        <div> 
            <span>Location: {{event.location.address}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
    </div>
    `
})

export class EventThumbnailComponent{
    testStringProperty:string = 'Hello there!'

    @Input() event: any
    //this output property is what the parent componet binds to, not the handleClickMe() method below!! 
    @Output() eventClick = new EventEmitter()
    
    //emitting the event when the button is clcicked in the child component 
    handleClickMe() {
        console.log('in child component, sending component name')
        this.eventClick.emit(this.event.name)
    }

    logFoo(){
        console.log('log foo from child; method called using template variable #templateVariable')
    }
}