import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

export const userRoutes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]
//the final path for this module will be /user/profile becausue when we create the route and loadChildren we create the path: 'user', loadChildren: '.....'