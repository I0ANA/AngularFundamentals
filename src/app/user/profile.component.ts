import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl:'./profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5}
    .error ::-webkit-input-placeholder { color: #999 }

  `]
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router){}

  profileForm: FormGroup
  //becasue these properties are private we needed to acces the field on the form using the syntax: profileForm.controls.<fieldname>.<property>
  //otherwise, if the fields are public, we can access them directly 
  private firstName: FormControl
  private lastName: FormControl

  ngOnInit(): void {
    //erroring
    // console.log('this.auth.currentUser.firstName: ' + this.auth.currentUser.firstName)
    // console.log('this.auth.currentUser.lastName: ' + this.auth.currentUser.lastName)
//this does not work properly - the erros does not dissapear when addin a valid firstname
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern("a-zA-Z.*")])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }      

  saveProfile(formValues) {
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['/events'])
    }
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  validateLastName() {
    // return this.profileForm.controls.lasttName?.invalid && this.profileForm.controls.lasttName?.touched ;#
    //it is more direct to just get the value from the this.<control> than from the form 
    return this.lastName.valid || this.lastName.untouched  
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched 
  }

}