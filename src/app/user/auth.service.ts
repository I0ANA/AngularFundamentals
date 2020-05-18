import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { tap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable() 
export class AuthService {
    currentUser: IUser

    constructor(private http: HttpClient){}

    loginUser(username: string, password: string){
        // this.currentUser = {
        //     id: 1,
        //     userName: username,
        //     firstName: 'John',  
        //     lastName: 'Papa'
        // }

        let loginInfo = { username: username, password: password}
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

        return this.http.post('api/login', loginInfo, options)
        //do not subscribe but use the returned data using tap - use the data as a side effect
        //tap does not manipulate the returned data
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user']
            }))
            //return an observable of false if any error
            .pipe(catchError( err => { return of(false) } ))
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}