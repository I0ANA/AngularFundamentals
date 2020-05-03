import { Injectable } from '@angular/core'

//when we imported into the ancular CLI configurration aka angular.json file the toastr files, this made toastr globally available, 
//but typescript does not know that, so here we let know typescript that toastr is something we know about 
declare let toastr:any

@Injectable()
export class ToastrService {
    success (message:string, title?:string){
        toastr.success(message, title)
    }

    error (message:string, title?:string){
        toastr.error(message, title)
    }

    info (message:string, title?:string){
        toastr.info(message, title)
    }

    warn (message:string, title?:string){
        toastr.console.warn(message, title)
    }
}