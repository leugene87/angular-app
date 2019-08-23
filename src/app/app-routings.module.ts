import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginGuardService } from './feture-modules/login/login-guard.service';
import { ContentComponent } from './content/content.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { DevPageComponent } from './shared/dev-page/dev-page.component';


const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'vendors', canActivate: [LoginGuardService], component: ContentComponent },
    { path: 'login', loadChildren: './feture-modules/login/login.module#LoginModule' },
    { path: 'userinfo', canActivate: [LoginGuardService], component: UserinfoComponent },
    { path: 'notready', component: DevPageComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ], exports: [
        RouterModule
    ]
})


export class AppRoutingsModule {

}