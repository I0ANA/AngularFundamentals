import { Component, Input, OnChanges} from '@angular/core'
import { ISession } from '../shared/index'
import { AuthService } from 'src/app/user/auth.service'
import { VoterService } from './voter.service'

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    @Input() eventId: number

    visibleSessions: ISession[] = []

    constructor(private auth: AuthService, private voterService: VoterService) {}

    //ngOnChanged will be triggered everytime the Input parameters get a new value 
    //it will be triggered both on sessions and filteredBy changes
    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy)
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    toggleVote(session: ISession){
        if (this.userHasVoted(session))
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName)
        else 
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
            
        if (this.filterBy === 'votes')
            this.visibleSessions = this.visibleSessions.sort(sortByVotesDesc) 
    }

    userHasVoted (session){
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }

    filterSessions (filter) {
        console.log('filter is: ' + filter)
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0) 
        }
        else {
            this.visibleSessions = this.sessions.filter( session => { return session.level.toLocaleLowerCase() === filter } )
        }
    }
}

function sortByName (s1:ISession, s2:ISession) {
    if(s1.name > s2.name)
        return 1
    else if (s1.name == s2.name)
        return 0
    else return -1
}

function sortByVotesDesc (s1:ISession, s2:ISession){
    return s2.voters.length -s1.voters.length
}