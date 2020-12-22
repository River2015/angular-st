import {Component, HostBinding, OnInit} from '@angular/core';
import {ICourse} from '../../models/course';
import {COURSES} from '../../mocks';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';

  courses: Array<ICourse>;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  loadMore(): void {
    console.log(' courses loaded');
  }

  delete(id: number): void {
    this.courses = this.coursesService.removeCourse(id);
  }

  add(): void {
    this.courses = [];
  }

}
