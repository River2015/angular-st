import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GetProfile, GetProfileComplete, Login, LoginComplete, LoginError, UserActionTypes} from './user.actions';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';



@Injectable()
export class UserEffects {

  // @ts-ignore
  postLogin$ = createEffect(() => this.actions$
    .pipe(
      ofType<Login>(UserActionTypes.LOGIN),
      switchMap((data) => this.authService.loginUser( data.payload.login, data.payload.password,)
        .pipe(
          switchMap((user) => {
              localStorage.setItem('user', JSON.stringify(user));
              return [new LoginComplete(user), new GetProfile(user)];
              },
            ),
            tap( () => this.router.navigateByUrl('/courses') ),
            catchError(error => of(new LoginError(error)))
          )
        )
      )
    );

  getProfile$ = createEffect(() => this.actions$
    .pipe(
      ofType<GetProfile>(UserActionTypes.GET_PROFILE),
      mergeMap((data) => this.authService.getUserProfile( data.payload)
        .pipe(
          map((user) => {
              return new GetProfileComplete(user.name);
            }
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

}
