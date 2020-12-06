import {Component, HostBinding, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import {ICourse} from '../../models/course';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit, OnChanges {
  @HostBinding('class')class = 'study-courses';

  courses: Array<ICourse>;

  constructor() {
  }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'Video course 1',
        duration: 90,
        creation: '12.12.2020',
        description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
      },
      {
        id: 2,
        title: 'Video course 2',
        duration: 120,
        creation: '14.12.2020',
        description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
      },
      {
        id: 3,
        title: 'Video course 3',
        duration: 60,
        creation: '10.12.2020',
        description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when'
      }
    ];
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
