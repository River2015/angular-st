import {Component, HostBinding, OnInit} from '@angular/core';
import {ICourse} from '../../models/course';
import {SearchPipe} from '../../pipes/search.pipe';
import {COURSES} from '../../mocks';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';
  courses: Array<ICourse> = COURSES;

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

  search(searchText: string): any {
    if (!searchText) {
      this.courses = COURSES;               // there is filtering pipe in template
    }
    this.courses = this.searchPipe.transform( this.courses, searchText);
  }

  add(): void {
    console.log(' courses loaded');
  }

}
