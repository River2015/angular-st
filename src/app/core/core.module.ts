import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CoursesComponent} from './components/courses/courses.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {CoursesSearchComponent} from './components/courses/components/courses-search/courses-search.component';
import {CourseComponent} from './components/courses/components/course/course.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    ProfileComponent,
    BreadcrumbsComponent,
    CoursesSearchComponent,
    CourseComponent,
    LoginComponent,
  ],
  exports: [
    HeaderComponent,
    CoursesComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
