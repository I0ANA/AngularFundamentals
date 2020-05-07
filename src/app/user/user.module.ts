import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ProfileComponent } from './profile.component'
import { userRoutes } from './user.routes'
import { LoginComponent } from './login.component'

// FormsModule gives us access to template based forms features
//we need to import it to have access to (ngModel)
import { FormsModule} from '@angular/forms' 

@NgModule({
imports:[
    CommonModule, //this is what makes the difference between a feature module/ lazy loading feature module and the appModule which loads the BrowserModule
    //another difference is that in the appModule we call RouterModule.forRoot while in our feature module we call RouterModule.forChild()
    RouterModule.forChild(userRoutes),
    FormsModule
],
declarations: [
    ProfileComponent,
    LoginComponent
],
providers: [

]
})
export class userModule {

}