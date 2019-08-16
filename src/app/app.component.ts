import { Component, ElementRef, ViewChild, HostListener, Renderer2, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
//import { LogginService } from './shared/loggin.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // providers: [LogginService]
})
export class AppComponent implements OnInit {
    isLoggedIn: boolean;
    theme: string;
    selectedMenuName: string;
    constructor(private router: Router, private activeRoute: ActivatedRoute, private loginServ: LoginService) {

    }
    ngOnInit() {
        this.isLoggedIn = this.loginServ.isLoggedIn;
        if (this.theme == null) {
            if (localStorage.getItem('theme')) {
                this.theme = localStorage.getItem('theme');
            } else {
                this.theme = 'light';
            }
        } else {
            return this.theme;
        }
    }
    loadMenu(selectedMenuName: string) {
        this.selectedMenuName = selectedMenuName;
    }

    switchTheme() {
        this.theme = this.theme == 'light' ? 'dark' : 'light';
        localStorage.setItem("theme", this.theme);
    }

    onLogout() {
        this.loginServ.doLogout();
        this.router.navigate(['/login']);
    }

}



