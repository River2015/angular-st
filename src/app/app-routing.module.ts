import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './core/components/courses/courses.component';
import {AddCourseComponent} from './core/components/add-course/add-course.component';
import {LoginComponent} from './core/components/login/login.component';
import {AuthGuard} from './core/guards/auth.guard';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {EditCourseComponent} from './core/components/edit-course/edit-course.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },

  {
    path: 'courses',
    canActivate: [AuthGuard],
    component: CoursesComponent,
    data: {
      breadcrumb: 'courses',
    },
    children: [
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: AddCourseComponent,
        data: {
          breadcrumb: 'add',
        },
      },
      {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        component: EditCourseComponent,
        data: {
          breadcrumb: 'edit'
        },
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
