import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatNativeDateModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatSortModule,
  MatDialogModule,
  MatPaginatorModule
} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { SearchFormComponent } from './content/search-form/search-form.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DataTableComponent } from './content/data-table/data-table.component';
import { DevPageComponent } from './shared/dev-page/dev-page.component';
import { AppRoutingsModule } from './app-routings.module';
import { LoginModule } from './feture-modules/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideMenuComponent,
    SearchFormComponent,
    WelcomeComponent,
    UserinfoComponent,
    DialogComponent,
    DataTableComponent,
    DevPageComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    // BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingsModule,
    LoginModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
