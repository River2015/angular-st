import {Component, EventEmitter, HostBinding, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {EMPTY, Subject, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'study-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.less']
})
export class CoursesSearchComponent implements OnInit, OnDestroy{
  @HostBinding('class')class = 'courses-search';
  @Output() searchPass: EventEmitter<string> = new EventEmitter<string>();

  term$ = new Subject<any>();
  form: FormGroup;

  private searchSubscription: Subscription;

  constructor(private fb: FormBuilder) {}

  get searchText(): AbstractControl {
    return this.form.get('searchText');
  }

  ngOnInit(): void {
    this.createForm();
    this.searchSubscription = this.term$.pipe(
      debounceTime(1000),
      filter(value => value.length > 3),
      distinctUntilChanged(),
      switchMap(() => {
        this.searchPass.emit(this.searchText.value);
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

  private createForm(): void {
    this.form = this.fb.group({
      searchText: [null],
    });
  }

  // onKeyUp(): void {
  //   this.searchPass.emit(this.searchText);
  // }
}

