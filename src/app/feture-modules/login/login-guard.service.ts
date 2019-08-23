import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

    constructor(private router: Router, private loginServ: LoginService, private dialog: MatDialog) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.loginServ.isLoggedInStorage) {
            return true;
        } else {
            const dialogRef = this.dialog.open(DialogComponent, {
                width: '400px',
                height: '200px',
                disableClose: true,
                data: { message: "You need to login to view this content. Please Login." }
            });

            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/login']);
            });
        }
    }
}
