import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession } from '../shared/event.model'

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5}
        .error ::-webkit-input-placeholder { color: #999 }
    `]
})

export class CreateSessionComponent implements OnInit {

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
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords])

        this.newSessionGroup = new FormGroup({
            sessionName: this.sessionName,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    private restrictedWords(control: FormControl): {[key:string]: any}
    {
        // <em *ngIf="abstract.invalid && abstract.dirty && abstract?.errors.restrictedWords">restrictedWords found</em>
        // when applied in html, the restrictedWords in abstract?.errors.restrictedWords matches the restrictedWords in ? {'restrictedWords': 'foo'}
        return control.value.includes('foo')
        ? {'restrictedWords': 'foo'}
        : null 
    }

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
    }
}