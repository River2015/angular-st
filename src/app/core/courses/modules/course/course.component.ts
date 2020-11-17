import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'study-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  @HostBinding('class')class = 'study-course';

  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
