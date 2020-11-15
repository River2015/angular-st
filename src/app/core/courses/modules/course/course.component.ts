import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'study-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @HostBinding('class')class = 'study-course';
  constructor() { }

  ngOnInit(): void {
  }

}
