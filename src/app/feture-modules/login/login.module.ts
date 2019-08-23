import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

// const loginRoutes: Routes = [
//     { path: '', component: LoginComponent }
// ]

@NgModule({
  declarations: [
    LoginComponent,
    SpinnerComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ]),
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [RouterModule, SpinnerComponent, LoginComponent, MatInputModule, MatIconModule, MatButtonModule]
})
export class LoginModule { }
