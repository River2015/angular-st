import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoursesComponent } from './core/courses/courses.component';
import { ProfileComponent } from './core/modules/profile/profile.component';
import { BreadcrumbsComponent } from './core/modules/breadcrumbs/breadcrumbs.component';
import { CoursesSearchComponent } from './core/courses/modules/courses-search/courses-search.component';
import { CourseComponent } from './core/courses/modules/course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    ProfileComponent,
    BreadcrumbsComponent,
    CoursesSearchComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
