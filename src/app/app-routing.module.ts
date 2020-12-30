import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './core/components/courses/courses.component';
import {AddCourseComponent} from './core/components/add-course/add-course.component';
import {LoginComponent} from './core/components/login/login.component';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'courses', pathMatch: 'full' },

  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: CoursesComponent,
  },

  {
    path: 'add',
    canActivate: [AuthGuard],
    component: AddCourseComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
