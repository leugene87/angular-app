import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Component({
    selector: 'app-userinfo',
    templateUrl: './userinfo.component.html',
    styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
    loggedUser: User;
    //  userProperties: { propName: string, propValue: string }[] = [];

    constructor(private loginServ: LoginService) {
    }

    ngOnInit() {
        this.loggedUser = this.loginServ.loggedUser;
    }
}
