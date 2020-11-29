import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  OnChanges,
  Output,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';
import {ICourse} from '../../../../models/course';

@Component({
  selector: 'study-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @HostBinding('class')class = 'study-course';

  @Input() course: ICourse;

  @Output() courseDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    // TODO: hooks study - delete code
    console.log('ngOnInit point no data', this.course);
  }

  ngOnInit(): void {
    // TODO: hooks study - delete code
    console.log('ngOnInit point data appears', this.course);
  }

  // TODO: hooks study - delete code
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges point data appears', changes);
  }

  edit(): void {
    console.log('edit');
  }

  delete(): void {
    this.courseDelete.emit(this.course.id);
  }

  // TODO: hooks study - delete code
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // TODO: hooks study - delete code
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // TODO: hooks study - delete code
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // TODO: hooks study - delete code
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // TODO: hooks study - delete code
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
