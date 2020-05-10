import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {ISession, restrictedWords } from '../shared/index'

@Component({
    selector:'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5}
        .error ::-webkit-input-placeholder { color: #999 }
    `]
})

export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()

    newSessionGroup: FormGroup
    sessionName: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit() {
        this.sessionName = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar']) ])

        this.newSessionGroup = new FormGroup({
            sessionName: this.sessionName,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    // private restrictedWords(control: FormControl): {[key:string]: any}
    // {
    //     // <em *ngIf="abstract.invalid && abstract.dirty && abstract?.errors.restrictedWords">restrictedWords found</em>
    //     // when applied in html, the restrictedWords in abstract?.errors.restrictedWords matches the restrictedWords in ? {'restrictedWords': 'foo'}
    //     return control.value.includes('foo')
    //     ? {'restrictedWords': 'foo'}
    //     : null 
    // }

    saveSession(formValues){
        let session:ISession =  {
            id: undefined,
            name: formValues.sessionName,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }

        this.saveNewSession.emit(session)
        //this session that we pass in, it is sees as $event for the binding that we do in the parent component child selector eg: <create-session *ngIf="addMode" (saveNewSession)="saveNewSession($event)"></create-session>
    }

    cancel() {
        this.cancelAddSession.emit()
    }
}