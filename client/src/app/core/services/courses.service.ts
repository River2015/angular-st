import { Injectable } from '@angular/core';
import {ICourse} from '../models/course';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {ErrorService} from './error.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: any = [];
  endpoint = 'http://localhost:3004/courses/';
  constructor(private http: HttpClient, private router: Router, private handleError: ErrorService) { }

  getCourses(start?, count?, sort?, textFragment?): Observable<any>{
    const api = `${this.endpoint}?start=${start}&count=${count}`;
    return this.http.get(api, httpOptions).pipe(
      map((res: Response) => {
        return res || {};
      }),
     // catchError(this.handleError);
    );
  }

  getCoursesId(id: string): Observable<any>{
    const api = `${this.endpoint}/${id}`
    return this.http.get(api, httpOptions).pipe(
      map((res: Response) => {
        return res || {};
      }),
      // catchError(this.handleError);
    );
  }

  addCourse(course: ICourse): Array<ICourse> {
    return [...this.courses, course];
  }

  // getCourseId(id: number): ICourse[] {
  //   return this.courses.filter((course) => course.id === id);
  // }

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

  removeCourse(id: string): any {
    console.log(id);
    const api = `${this.endpoint}/${id}`
    return this.http.delete(api, httpOptions)
      .subscribe(
        (val) => {
          console.log('DELETE call successful value returned in body',
            val);
        },
        response => {
          console.log('DELETE call in error', response);
        },
        () => {
          console.log('The DELETE observable is now completed.');
        });
  }
}
