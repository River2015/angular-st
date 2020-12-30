import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CoursesComponent} from './components/courses/courses.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {CoursesSearchComponent} from './components/courses/components/courses-search/courses-search.component';
import {CourseComponent} from './components/courses/components/course/course.component';
import {CourseBorderDirective} from './directives/course-border.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './pipes/search.pipe';
import { LoginComponent } from './components/login/login.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    ProfileComponent,
    BreadcrumbsComponent,
    CoursesSearchComponent,
    CourseComponent,
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    SearchPipe,
    LoginComponent,
    AddCourseComponent,
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
  ],
  providers: [ SearchPipe ]
})
export class CoreModule { }
