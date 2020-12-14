import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ICourse} from '../../../../models/course';

@Component({
  selector: 'study-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.less']
})
export class CoursesSearchComponent implements OnInit {
  @HostBinding('class')class = 'courses-search';
  @Input() courses: ICourse;

  value = 'value';
  searchText = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.courses);
  }

  search(): void {
      console.log(this.value);
   }
}
