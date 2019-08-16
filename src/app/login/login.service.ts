import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { User } from '../shared/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private _isLoggedIn: boolean = false;
    errorMessage: string = null;
    get isLoggedIn() {
        if (!this._isLoggedIn && localStorage.getItem('jsona')) {
            return true;
        }
        return this._isLoggedIn;
    }

    private _loggedUser: User;
    get loggedUser() {
        if (this._loggedUser == null && localStorage.getItem('curentUser')) {
            this._loggedUser = JSON.parse(localStorage.getItem('curentUser'));
        }
        return this._loggedUser;
    }

    constructor(private http: HttpClient) { }

    doLogin(username: string, password: string, ip: string) {

        return this.http.post<User>('http://' + ip + ':9000/api/v101/login', {},
            {
                headers: new HttpHeaders({
                    'Content-Type': 'text/plain',
                    'Username': username,
                    'Password': password
                })
            }).pipe(tap(response => {
                localStorage.setItem("curentUser", JSON.stringify(response));
                localStorage.setItem("jsona", response.accessToken);
                localStorage.setItem("ip", ip);
                const responceUser = new User(
                    response.accessToken,
                    response.userName,
                    response.id,
                    response.realName,
                    response.firstName,
                    response.lastName,
                    response.avatarURI,
                    response.email,
                    response.phone,
                    response.resourceRoleCode,
                    response.companies);
                this._loggedUser = responceUser;
            }));
    }
    doLogout() {
        localStorage.removeItem('curentUser');
        localStorage.removeItem('jsona');
        localStorage.removeItem('endpoint');
        this._loggedUser = null;
        this._isLoggedIn = false;
    }
}
