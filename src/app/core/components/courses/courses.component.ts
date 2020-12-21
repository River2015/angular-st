import {Component, HostBinding, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import {ICourse} from '../../models/course';
import {COURSES} from '../../mocks';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit, OnChanges {
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
    console.log(id);
    this.courses = this.courses.filter((course: ICourse) => course.id !== id);
  }

  add(): void {
    this.courses = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }
}
