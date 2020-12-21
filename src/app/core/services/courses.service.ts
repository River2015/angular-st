import { Injectable } from '@angular/core';
import {ICourse} from '../models/course';
import {COURSES} from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(): Array<ICourse>{
    return COURSES;
  }

  addCourse(course: ICourse): Array<ICourse> {
    return [...COURSES, course];
  }
}
