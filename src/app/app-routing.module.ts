import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './core/components/courses/courses.component';
import {AddCourseComponent} from './core/components/add-course/add-course.component';

const routes: Routes = [

  { path: '', redirectTo: 'courses', pathMatch: 'full' },

  {
    path: 'courses',
    component: CoursesComponent,
  },

  {
    path: 'add',
    component: AddCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
