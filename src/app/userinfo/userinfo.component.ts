import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';
import { User } from '../shared/models/user.model';

@Component({
    selector: 'app-userinfo',
    templateUrl: './userinfo.component.html',
    styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
    loggedUser: User;
    userProperties: { propName: string, propValue: string }[] = [];

    constructor(private logginServ: LoginService) {
    }

    ngOnInit() {
        this.loggedUser = this.logginServ.loggedUser;
        // const userProps = Object.keys(this.loggedUser);
        // let propVal;
        // for (let prop of userProps) {
        //     if (prop !== "companies") {
        //         propVal = this.loggedUser[prop] != null ? this.loggedUser[prop] : "N/A";
        //         this.userProperties.push({ propName: prop.toUpperCase(), propValue: propVal });
        //     }

        // }
    }
}
