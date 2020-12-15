import {Component, HostBinding, OnInit} from '@angular/core';
import {ICourse} from '../../models/course';
import {SearchPipe} from './pipes/search.pipe';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';
  courses: Array<ICourse> = [
    {
      id: 1,
      title: '1 Video course',
      duration: 90,
      creation: '12.11.2020',
      description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
      topRated: true
    },
    {
      id: 2,
      title: '2 course',
      duration: 120,
      creation: '12.12.2020',
      description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
      topRated: false
    },
    {
      id: 3,
      title: '3 Video',
      duration: 50,
      creation: '10.12.2020',
      description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
      topRated: true
    }
  ];

  constructor(private searchPipe: SearchPipe) {
  }

  ngOnInit(): void {

  }

  loadMore(): void {
    console.log(' courses loaded');
  }

  delete(id: number): void {
    this.courses = this.courses.filter((course: ICourse) => course.id !== id);
  }

  search(searchText: string): void {
    this.courses = this.searchPipe.transform( this.courses, searchText);
  }

  add(): void {
    console.log(' courses loaded');
  }

}
