import { Injectable } from '@angular/core'
import { ISession } from '../shared/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {

    constructor( private http: HttpClient){}

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter( v => v !== voterName)

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url)
            .pipe(catchError(this.handleError<ISession[]>('searchSessions')))
            .subscribe()
    }

    addVoter(eventId: number, session: ISession, voterName: string){
        session.voters.push(voterName)

        let options = { headers: new HttpHeaders( { 'Content-Type': '/application/json' } ) }
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError<ISession[]>('searchSessions')))
            //we don't care what the addVoters returns so we make it subscribe to itself
            .subscribe()
    }

    userHasVoted(session: ISession, voterName: string){
        return session.voters.some( v => v === voterName)
    }

    private handleError<T> (operation = 'operation', result?: T){
        return (error:any) : Observable<T> => {
          console.log(error)
          return of(result as T)
        }
      }
}