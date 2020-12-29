import {Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'study-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.less']
})
export class CoursesSearchComponent implements OnInit{
  @HostBinding('class')class = 'courses-search';
  @Output() searchPass: EventEmitter<string> = new EventEmitter<string>();
  searchText = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.searchText);
  }

  search(): void {
    console.log(this.searchText);
    this.searchPass.emit(this.searchText);
    this.searchText = '';
  }
}
