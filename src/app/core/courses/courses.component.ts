import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';

  constructor() { }

  ngOnInit(): void {
  }

}
