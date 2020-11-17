import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';

  courses: string[];

  constructor() { }

  ngOnInit(): void {
    this.courses = ['course1', 'course2', 'course3'];
  }

}
