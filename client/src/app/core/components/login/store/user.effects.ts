import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  CoursesActionTypes,
  LoadCoursesAction,
  LoadCoursesFailureAction,
  LoadCoursesSuccessAction
} from '../../courses/store/courses.actions';
import {catchError, exhaustMap, map, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GetProfile, GetProfileComplete, Login, LoginComplete, LoginError, UserActionTypes} from './user.actions';
import {AuthService} from '../../../services/auth.service';



@Injectable()
export class UserEffects {

  // @ts-ignore
  // postLogin$ = createEffect(() => this.actions$
  //   .pipe(
  //     ofType<Login>(UserActionTypes.LOGIN),
  //     mergeMap((data) => this.authService.loginUser( data.payload.login, data.payload.password,)
  //       .pipe(
  //         map((user) => {
  //             console.log(user);
  //             return new LoginComplete(user);
  //           },
  //           catchError(error => of(new LoginError(error)))
  //         )
  //       )
  //     )
  //   )
  // );

  postLogin$ = createEffect(() => this.actions$
    .pipe(
      ofType<GetProfile>(UserActionTypes.GET_PROFILE),
      mergeMap((data) => this.authService.getUserProfile( data.payload)
        .pipe(
          map((user) => {
              console.log(user.name);
              return new GetProfileComplete(user.name);
            }
          )
        )
      )
    )
  );



  constructor(private actions$: Actions, private authService: AuthService) {}

}
