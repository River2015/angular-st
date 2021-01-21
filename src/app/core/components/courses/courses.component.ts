import {Component, HostBinding, OnInit} from '@angular/core';
import {ICourse} from '../../models/course';
import {SearchPipe} from '../../pipes/search.pipe';
import {COURSES} from '../../mocks';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';
  courses: Array<ICourse> = COURSES;

  constructor(private searchPipe: SearchPipe, private coursesService: CoursesService, private router: Router) {
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  loadMore(): void {
    console.log(' courses loaded');
  }

  delete(id: number): void {
    const isConfirm = confirm('Are you sure to delete item?');
    if (isConfirm){
      this.courses = this.coursesService.removeCourse(id);
    } else { return; }
  }

  search(searchText: string): any {
    if (!searchText) {
      this.courses = COURSES;               // there is filtering pipe in template
    }
    this.courses = this.searchPipe.transform( this.courses, searchText);
  }

  add(): void {
    this.router.navigateByUrl('courses/add');
  }

}
