import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError, switchMap} from 'rxjs/operators';

import { of } from 'rxjs';
import { CoursesService } from '../../../services/courses.service';
import {
  AddCourseAction,
  AddCourseFailureAction,
  AddCourseSuccessAction,
  CoursesActionTypes,
  DeleteCourseAction,
  DeleteCourseSuccessAction,
  EditCourseAction,
  EditCourseSuccessAction,
  EditCourseFailureAction,
  LoadCoursesAction,
  LoadCoursesFailureAction,
  LoadCoursesSuccessAction,
  DeleteCourseFailureAction, LoadMoreCoursesAction, LoadSearchCoursesAction
} from './courses.actions';


@Injectable()
export class CoursesEffects {
  start = 0;
  count = 10;
  load: number;
  loadCourses$ = createEffect(() => this.actions$
    .pipe(
    ofType<LoadCoursesAction>(CoursesActionTypes.LOAD_COURSES),
    mergeMap(() => this.coursesService.getCourses(this.start, this.count)
      .pipe(
        map(courses => new LoadCoursesSuccessAction ( courses ),
            catchError(error => of(new LoadCoursesFailureAction(error)))
          )
        )
      )
    )
  );

  loadMoreCourses$ = createEffect(() => this.actions$
    .pipe(
      ofType<LoadMoreCoursesAction>(CoursesActionTypes.LOAD_MORE_COURSES),
      mergeMap(() => this.coursesService.getCourses(this.load, this.count)
        .pipe(
          map(courses => new LoadCoursesSuccessAction ( courses ),
            catchError(error => of(new LoadCoursesFailureAction(error)))
          )
        )
      )
    )
  );


  // // @ts-ignore
  // loadSearchCourses$ = createEffect(() => this.actions$
  //   .pipe(
  //     ofType<LoadSearchCoursesAction>(CoursesActionTypes.LOAD_SEARCH_COURSES),
  //     mergeMap(() => this.coursesService.searchCourse(payload)
  //       .pipe(
  //         map(courses => new LoadCoursesSuccessAction ( courses ),
  //           catchError(error => of(new LoadCoursesFailureAction(error)))
  //         )
  //       )
  //     )
  //   )
  // );

  addCourseItem$ = createEffect(() => this.actions$
    .pipe(
      ofType<AddCourseAction>(CoursesActionTypes.ADD_COURSE),
      mergeMap(
        (data) => this.coursesService.addCourse(data.payload)
          .pipe(
            map(() => new AddCourseSuccessAction(data.payload)),
            catchError(error => of(new AddCourseFailureAction(error)))
          )
        )
      )
    );

  // @ts-ignore
  editCourseItem$ = createEffect(() => this.actions$
    .pipe(
      ofType<EditCourseAction>(CoursesActionTypes.EDIT_COURSE),
      mergeMap(
        (data) => this.coursesService.updateCourse(data.payload.id, data.payload.course)
          .pipe(
            map((editedData) => new EditCourseSuccessAction(editedData),
            catchError(error => of(new EditCourseFailureAction(error)))
          )
      )
    )
  )
)
  // @ts-ignore
  deleteCourseItem$ = createEffect(() => this.actions$
    .pipe(
      ofType<DeleteCourseAction>(CoursesActionTypes.DELETE_COURSE),
      mergeMap(
        (data) => this.coursesService.removeCourse(data.payload)
          .pipe(
            map(() => new DeleteCourseSuccessAction(data.payload)),
            catchError(error => of(new DeleteCourseFailureAction(error)))
          )
        )
      )
    )

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {
    this.load = this.start + this.count + 1;
  }
}
