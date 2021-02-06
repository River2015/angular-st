import {Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {EMPTY, fromEvent, Observable, Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, pluck, switchMap} from 'rxjs/operators';
import {CoursesService} from '../../../../services/courses.service';

@Component({
  selector: 'study-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.less']
})
export class CoursesSearchComponent implements OnInit, OnDestroy{
  @HostBinding('class')class = 'courses-search';
  @Output() searchPass: EventEmitter<string> = new EventEmitter<string>();

  term$ = new Subject<string>();
  searchText = '';

  private searchSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.searchSubscription = this.term$.pipe(
      debounceTime(1000),
      filter(value => value.length > 3),
      distinctUntilChanged(),
      switchMap(() => {
        this.searchPass.emit(this.searchText);
        return EMPTY;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
   if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
      this.searchSubscription = null;
    }
  }

  // onKeyUp(): void {
  //   this.searchPass.emit(this.searchText);
  // }
}

