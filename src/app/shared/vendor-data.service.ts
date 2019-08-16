import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { Vendor } from './models/vendor.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VendorAccountsService {
    isSearchingSubject = new Subject<boolean>();

    constructor(private http: HttpClient, private loginServ: LoginService) { }

    findVendors(parameter: string, value: string) {
        return this.http.get<Vendor[]>('http://192.168.1.66:9000/api/v101/vendors', {
            headers: new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('jsona') }),
            params: new HttpParams().set('parameter', parameter).set('value', value)
        })
    }



}
