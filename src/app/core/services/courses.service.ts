import { Injectable } from '@angular/core';
import {ICourse} from '../models/course';
import {COURSES} from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Array<ICourse> = COURSES;

  constructor() { }

  getCourses(): Array<ICourse>{
    return this.courses;
  }

  addCourse(course: ICourse): Array<ICourse> {
    return [...this.courses, course];
  }

  getCourseId(id: number): ICourse[] {
    return this.courses.filter((course) => course.id === id);
  }

  updateCourse(
    id: number,
    title: string,
    creation: string,
    duration: number,
    description: string): ICourse[] {
      return this.courses.filter((course) => {
        if (course.id === id) {
          const updatedCourse = {
            id,
            title,
            creation,
            duration,
            description
          };
          return { ...course, ...updatedCourse};
        }
      }
    );
  }

  removeCourse(id: number): ICourse[] {
    this.courses = this.courses.filter((course) => course.id !== id);
    return this.courses;
  }
}
