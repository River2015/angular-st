import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoursesService} from '../../services/courses.service';
import {AddCourseSuccessAction} from '../courses/store/courses.actions';
import {Observable} from 'rxjs';
import {ICourse} from '../../models/course';
import {Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';

@Component({
  selector: 'study-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.less']
})
export class AddCourseComponent implements OnInit {
  @Input() newCourseItem = { id: 0, name: '', description: '', date: '', length: 0, author: [], isTopRated: true };
  value = '';
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(private router: Router, private coursesService: CoursesService,
              private store: Store<CoursesAppState>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.courses.loading);
    this.error$ = this.store.select(store => store.courses.error);
  }

  onEnter(value: string): void {
    this.value = value;
  }

  cancel(): void {
    this.router.navigateByUrl('/courses');
  }

  save(): void {
    this.newCourseItem.id = Number(new Date());
    this.store.dispatch(new AddCourseSuccessAction(this.newCourseItem));
    this.router.navigate(['/courses']);
  }

  number(val): number {
    return Number(val);
  }

  focusoutHandlerName(event): void {
    this.newCourseItem.name = event.target.value;
  }

  focusoutHandlerDate(event): void {
    this.newCourseItem.date = event.target.value;
  }

  focusoutHandlerDescription(event): void {
    this.newCourseItem.description = event.target.value;
  }

  focusoutHandlerAuthor(event): void {
    this.newCourseItem.author = event.target.value;
  }

  focusoutHandlerLength(event): void {
    this.newCourseItem.length = event.target.value;
  }
}
