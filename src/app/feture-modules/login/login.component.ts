import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginInProccess = false;
    username: string;
    password: string;
    error: string;
    ip: string;
    hidePassword = true;
    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit() {
        this.ip = localStorage.getItem('ip');
    }
    onSubmite(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const value = form.value;
        this.username = value.username;
        this.password = value.password;
        this.ip = value.ip;
        this.loginInProccess = true;
        this.loginService.doLogin(this.username, this.password, this.ip).subscribe(
            success => {
                this.loginInProccess = false;
                this.loginService.isLoggedSub.next(true);
                this.router.navigate(['/']);
            },
            error => {
                this.loginInProccess = false;
                this.loginService.isLoggedSub.next(false);
                this.error = error.message as string;
                form.reset();
            }
        );


    }

}
