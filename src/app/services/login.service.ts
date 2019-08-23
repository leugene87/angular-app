import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { User } from '../shared/models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedSub = new Subject<boolean>();
  errorMessage: string = null;
  get isLoggedInStorage(): boolean {
    if (sessionStorage.getItem('jsona')) {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line: variable-name
  private _loggedUser: User;
  get loggedUser() {
    if (this._loggedUser == null && sessionStorage.getItem('curentUser')) {
      this._loggedUser = JSON.parse(sessionStorage.getItem('curentUser'));
    }
    return this._loggedUser;
  }

  constructor(private http: HttpClient) { }

  doLogin(username: string, password: string, ip: string) {

    return this.http.post<User>('http://' + ip + ':9000/api/v101/login', {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'text/plain',
          Username: username,
          Password: password
        })
      }).pipe(tap(response => {
        sessionStorage.setItem('curentUser', JSON.stringify(response));
        sessionStorage.setItem('jsona', response.accessToken);
        localStorage.setItem('ip', ip);
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
    sessionStorage.removeItem('curentUser');
    sessionStorage.removeItem('jsona');
    localStorage.removeItem('ip');
    this._loggedUser = null;
    //  this.isLoggedIn = false;
    this.isLoggedSub.next(false);
  }
}
