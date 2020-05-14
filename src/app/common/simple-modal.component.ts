import {Component, Input } from   '@angular/core'

@Component({
    selector:'simple-modal',
    //using the bootstrap modal:
    //-you need t oknow the id of the modal
    //-it needs the modal class 
    // modal-dialog and modal-content div clases are for styling
    //closing button has a close class and a data-dismiss attribute to close the modal, becasue of these classes the button will be shifted to the right
    //&times; is the x on the button

    template:`
    <div id="{{elementId}}" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"> 
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body">
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
}