import { Directive } from '@angular/core'
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

//for the validator to work we need to add it to the list of Angular validators: NG_VALIDATORS
@Directive({
    selector: '[location-validator]',
    //available just in the Directive/Component and children, not needed in the module
    //using useExisting will not create a new instance 
    //and using it with the third parameter 'multi: true' will append the validator to the existing list of angular validators, instead of replacing it
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {
    validate (formGroup: FormGroup): { [key: string]: any } {
        //accessing the controls we need to validate, inluding a sibling node
        let addressControl = formGroup.controls['address']
        let cityControl = formGroup.controls['city']
        let countryControl = formGroup.controls['country']

        //access a sibling node using root
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl']

        if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) 
        || (onlineUrlControl && onlineUrlControl.value))
        //meaning the validation is passing, no proble in here
            return null
        else 
            return { 'location-validator': false }
    }
}