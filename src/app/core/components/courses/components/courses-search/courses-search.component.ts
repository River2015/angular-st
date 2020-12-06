import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'study-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.less']
})
export class CoursesSearchComponent implements OnInit {
  @HostBinding('class')class = 'courses-search';
  value = 'value';

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
      console.log(this.value);
   }
}
