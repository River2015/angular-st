import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './core/components/courses/courses.component';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
