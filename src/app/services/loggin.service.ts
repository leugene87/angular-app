import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LogginService {
    constructor() { }

    logDoSearch(vendorAcc: string) {
        console.log(vendorAcc);

    }
}
