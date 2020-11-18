import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CoursesComponent} from './courses/courses.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {CoursesSearchComponent} from './courses/components/courses-search/courses-search.component';
import {CourseComponent} from './courses/components/course/course.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    ProfileComponent,
    BreadcrumbsComponent,
    CoursesSearchComponent,
    CourseComponent,
  ],
  exports: [
    HeaderComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
