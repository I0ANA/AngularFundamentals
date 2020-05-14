import { Directive, OnInit, Inject, ElementRef } from '@angular/core'
import { JQUERY_TOKEN } from './jQuery.service'

    //the modal-trigger directive is addded to a DOM element which we retrieve with the ref:ElemenRef parameter; it happens that the element is a button, 
    //and we add a 'click' listener on the button to trigger the modal popup

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private domElement: HTMLElement
    
    //in order to be able to get a reference of the object this directive is on we use ElementRef, which is a reference to the element
    //ElementRef - angular 2 pointer specific to an element
    constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.domElement = ref.nativeElement
    }

    ngOnInit(){
        //add an event listener in plain javascript
        this.domElement.addEventListener('click', event => {
            this.$('#simple-modal').modal({})
        })
    }
}