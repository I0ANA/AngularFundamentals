import { Component } from '@angular/core'

@Component({
    selector: 'collapsible-well-with-slots',
    template:`
        <div (click)="toggleContent()" class="well pointable">
            <h4>
                <ng-content select="[well-title-h4]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
   `
})

export class CollapsibleWellWitSlots {

    visible: boolean = true

    toggleContent() {
        this.visible = !this.visible
    }
}