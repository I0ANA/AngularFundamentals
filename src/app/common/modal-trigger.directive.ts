import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQUERY_TOKEN } from './jQuery.service'

    //the modal-trigger directive is addded to a DOM element which we retrieve with the ref:ElemenRef parameter; it happens that the element is a button, 
    //and we add a 'click' listener on the button to trigger the modal popup

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    private domElement: HTMLElement
    //modal-trigger has a dash - so it can't be used as a parameter name, it must be aliased, here aliased as modalId
    @Input('modal-trigger') modalId: string 
    
    //in order to be able to get a reference of the object this directive is on we use ElementRef, which is a reference to the element
    //ElementRef - angular 2 pointer specific to an element
    constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.domElement = ref.nativeElement
    }

    ngOnInit(){
        console.log('Initialised: ' + this.modalId )
        //add an event listener in plain javascript
        this.domElement.addEventListener('click', event => {
            console.log('Clicked: ' + this.modalId)
            //using ES6 interpolation string `${}`
            this.$(`#${this.modalId}`).modal({})
        })
    }
}