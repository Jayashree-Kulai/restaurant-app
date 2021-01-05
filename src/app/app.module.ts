import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ScheduleComponent } from './components/search-bar/schedule/schedule.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    BreadcrumbComponent,
    NavBarComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
