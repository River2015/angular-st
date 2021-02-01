import {Component, HostBinding, OnInit} from '@angular/core';
import {SearchPipe} from '../../pipes/search.pipe';
import {CoursesService} from '../../services/courses.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {CoursesAppState} from '../../models/courses-state.model';
import {Observable} from 'rxjs';
import {IAuthor, ICourse} from '../../models/course';
import {
  DeleteCourseSuccessAction,
  LoadCoursesAction
} from './store/study-courses.actions';

@Component({
  selector: 'study-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
})

export class CoursesComponent implements OnInit {
  @HostBinding('class')class = 'study-courses';
  courses;
  start: number;
  count: number;
  name: string;
  course;

  courseItems: Observable<Array<ICourse>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>

  constructor(
    private searchPipe: SearchPipe,
    private coursesService: CoursesService,
    private router: Router,
    private store: Store<CoursesAppState>
  ) {}

  ngOnInit(): void {
    this.courseItems = this.store.select(store => store.courses.list);
    this.loading$ = this.store.select(store => store.courses.loading);
    this.error$ = this.store.select(store => store.courses.error);

    this.store.dispatch(new LoadCoursesAction());
    // this.start = 0;
    // this.count = 10;
  }

  delete(id: number) {
    const isConfirm = confirm('Are you sure to delete item?');
    if (isConfirm){
      this.store.dispatch(new DeleteCourseSuccessAction(id));
    } else { return; }
  }

  onSearchPass(searchText: string): any{
    this.courses = this.coursesService.searchCourse(searchText);
  }

  loadMore(): void {
    this.store.dispatch(new LoadCoursesAction());
    this.start  = this.start + this.count + 1;
    this.courses = this.coursesService.getCourses(this.start, this.count);
  }

  edit(id: number): void {
    this.coursesService.getCoursesId(id).subscribe((data) => {
      this.course = data;
    });
  }

  add(): void {
    this.router.navigateByUrl('courses/add');
  }
}
