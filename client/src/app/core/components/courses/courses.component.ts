import {Component, HostBinding, OnInit} from '@angular/core';
import {ICourse} from '../../models/course';
import {SearchPipe} from '../../pipes/search.pipe';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
})


export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';
  courses;

  constructor(
    private searchPipe: SearchPipe,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // this.courses$ = this.httpClient.get<ICourse[]>('http://localhost:3004/courses')
      // .pipe(catchError(handleError());
    this.courses = this.coursesService.getCourses();
  }

  loadMore(): void {
    console.log(' courses loaded');
  }

  delete(id: string): void {
    const isConfirm = confirm('Are you sure to delete item?');
    if (isConfirm){
      this.courses = this.courses.filter(course => course.id !== id);
      this.coursesService.removeCourse(id);
    } else { return; }
  }

  // search(searchText: string): any {
  //   if (!searchText) {
  //     this.courses = COURSES;               // there is filtering pipe in template
  //   }
  //   this.courses = this.searchPipe.transform( this.courses, searchText);
  // }

  add(): void {
    this.router.navigateByUrl('courses/add');
  }

}
