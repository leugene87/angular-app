import { Component, ElementRef, ViewChild, HostListener, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './feture-modules/login/login.component';
import { LoginService } from './services/login.service';
import { Subscription } from 'rxjs';
//import { LogginService } from './shared/loggin.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // providers: [LogginService]
})
export class AppComponent implements OnInit, OnDestroy {
    isLoggedIn: boolean;
    theme: string;
    selectedMenuName: string;
    private isLoggedSubscription: Subscription;

    constructor(private router: Router, private activeRoute: ActivatedRoute, private loginServ: LoginService) {

    }

    ngOnInit() {
        this.isLoggedIn = this.loginServ.isLoggedInStorage;
        this.isLoggedSubscription = this.loginServ.isLoggedSub.subscribe(isLogged => {
            this.isLoggedIn = isLogged;
        });
        this.theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    }

    ngOnDestroy() {
        this.isLoggedSubscription.unsubscribe();
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



