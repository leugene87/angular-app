import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatNativeDateModule, MatListModule, MatInputModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SearchFormComponent } from './content/search-form/search-form.component';
import { VendorAccountsService } from './shared/vendor-data.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginGuardService } from './login/login-guard.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'vendors', canActivate: [LoginGuardService], component: ContentComponent },
    { path: 'login', component: LoginComponent },
    { path: 'userinfo', canActivate: [LoginGuardService], component: UserinfoComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        SideMenuComponent,
        SearchFormComponent,
        LoginComponent,
        WelcomeComponent,
        UserinfoComponent,
        DialogComponent,
        SpinnerComponent

    ],
    imports: [
        BrowserModule,
        MatOptionModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatNativeDateModule,
        MatListModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    entryComponents: [DialogComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
