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
  LoadCoursesAction, LoadMoreCoursesAction, LoadSearchCoursesAction
} from './store/courses.actions';

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
  error$: Observable<Error>;

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
  }

  delete(id: number): void {
    const isConfirm = confirm('Are you sure to delete item?');
    if (isConfirm){
      this.store.dispatch(new DeleteCourseSuccessAction(id));
    } else { return; }
  }

  // TODO: fix search

  onSearchPass(searchText: string): any{
    this.store.dispatch(new LoadSearchCoursesAction(searchText));
    // this.coursesService.searchCourse(searchText).subscribe(data => {
    //   this.courses = data;
    // });
  }

  loadMore(): void {
    this.store.dispatch(new LoadMoreCoursesAction());
  }

  edit(id: number): void {
    this.router.navigateByUrl('courses/edit/${id}');
  }

  add(): void {
    this.router.navigateByUrl('courses/add');
  }
}
