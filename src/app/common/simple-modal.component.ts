import { Component, Input, ViewChild, ElementRef, Inject } from   '@angular/core'
import { JQUERY_TOKEN } from './jQuery.service'

@Component({
    selector:'simple-modal',
    //using the bootstrap modal:
    //-you need t oknow the id of the modal
    //-it needs the modal class 
    // modal-dialog and modal-content div clases are for styling
    //closing button has a close class and a data-dismiss attribute to close the modal, becasue of these classes the button will be shifted to the right
    //&times; is the x on the button

    //the template reference variable #modalcontainer can't have - in the name 
    template:`
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"> 
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `]
})
export class SimpleModalComponent {
    @Input() title: string
    @Input() elementId: string
    @Input() closeOnBodyClick: boolean
    //instead of injecting the ElementRef in the constructor, 
    //we can use a ViewChild to access the template reference variable
    //we can add the #reference on whichever node we want to wrap, we want the wrapper div node 
    @ViewChild('modalcontainer') containerEl:ElementRef

    constructor(@Inject(JQUERY_TOKEN) private $:any){}

    closeModal() {
        if(this.closeOnBodyClick){
            this.$(this.containerEl.nativeElement).modal('hide')
        }
    }
}