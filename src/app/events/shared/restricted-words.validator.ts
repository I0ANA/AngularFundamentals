import { FormControl } from '@angular/forms'

export function restrictedWords(words:string[]) {
    //restrictedWords is a function that returns an annomymous function: (in params):<returned type> { ... return <return type>}
    return (control: FormControl): {[key:string]: any} => {
        if (!words) return null

        var invalidWords = words.map( w => control.value.includes(w) ? w : null ).filter(w => w != null )

        return invalidWords && invalidWords.length > 0 
            ? {'restrictedWords': invalidWords.join(', ')}
            : null
    }
}