import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CoursesComponent} from './components/courses/courses.component';
import {ProfileComponent} from './components/profile/profile.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {CoursesSearchComponent} from './components/courses/components/courses-search/courses-search.component';
import {CourseComponent} from './components/courses/components/course/course.component';
import {CourseBorderDirective} from './components/courses/directives/course-border.directive';
import {DurationPipe} from './components/courses/pipes/duration.pipe';
import {OrderByPipe} from './components/courses/pipes/order-by.pipe';
import {FilterPipe} from './components/courses/pipes/filter.pipe';
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
    CourseBorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  exports: [
    HeaderComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule { }
