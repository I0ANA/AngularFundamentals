
import { Component } from '@angular/core'

@Component({
    selector:'collapsible-well-with-three-slots',
    template:`
    <div (click)="toggleContent()" class= "well pointable">
        <h4>
            <ng-content select="[well-title-h4]"></ng-content>
        </h4>
        <h6>
            <ng-content *ngIf="visible" select="[well-subtitle]"></ng-content>
        </h6>
        <hr *ngIf="visible">
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `
})

export class CollapsibleWellWithThreeSlots {
    visible: boolean = true

    toggleContent() {
        this.visible = !this.visible
    }
}