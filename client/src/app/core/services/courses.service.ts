import { Injectable } from '@angular/core';
// import {ICourse} from '../models/course';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {catchError, concatMap, map, retry} from 'rxjs/operators';
import {ErrorService} from './error.service';
import {ICourse} from '../models/course';


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

  getCoursesId(id: number): Observable<any>{
    const api = `${this.endpoint}/${id}`;
    return this.http.get(api, httpOptions).pipe(
      map((res: Response) => {
        return res || {};
      }),
      // catchError(this.handleError);
    );
  }

  addCourse(course: any): Observable<any> {
    const api = `${this.endpoint}`;
    return this.http.post<any>(api, JSON.stringify(course), httpOptions)
      // .pipe(
      //   retry(1),
      //   catchError(this.handleError)
      // );
  }

  updateCourse(id, course): Observable<any> {
    const api = `${this.endpoint}/${id}`;
    return this.http.put(api, JSON.stringify(course), httpOptions)
      // .pipe(
      //   retry(1),
      //   catchError(this.handleError)
      // )
  }

  removeCourse(id: number): any {
    const start = 0;
    const count = 10;
    const api = `${this.endpoint}/${id}`
    return this.http.delete(api, httpOptions)
      .pipe(
        concatMap(() => this.getCourses( start, count)),
        // catchError(this.handleError)
      );
      // .subscribe(
      //   (course) => {
      //     console.log(course);
      //   },
      //   err => {
      //     console.log(err);
      //   });
  }


  searchCourse(textFragment: any): any {
    const api = `${this.endpoint}?textFragment=${textFragment}`;
    return this.http.get(api, httpOptions);
  }
}
