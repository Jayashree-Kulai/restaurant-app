import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ScheduleComponent } from './components/search-bar/schedule/schedule.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 




import { FooterComponent } from './components/footer/footer.component';
import { ResturantBackgroundComponent } from './components/resturant-background/resturant-background.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewRatingComponent } from './components/review-rating/review-rating.component';
import { HomeComponent } from './components/part2/home/home.component';
import { PopularBrandsComponent } from './components/part2/popular-brands/popular-brands.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    BreadcrumbComponent,
    NavBarComponent,
    ScheduleComponent,
    OverviewComponent,
    MenuComponent,
    FooterComponent,
    ResturantBackgroundComponent,
    GalleryComponent,
    ReviewRatingComponent,
    HomeComponent,
    PopularBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
