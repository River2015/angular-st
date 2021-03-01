import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LOGIN = '[Login] LOGIN',
  LOGIN_COMPLETE = '[Login] LOGIN_COMPLETE',
  LOGIN_ERROR = '[Login] LOGIN_ERROR',
  GET_PROFILE = '[Login] GET_PROFILE',
  GET_PROFILE_COMPLETE = '[Login] GET_PROFILE_COMPLETE',
}
export class Login implements Action {
  readonly type = UserActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginComplete implements Action {
  readonly type = UserActionTypes.LOGIN_COMPLETE;
  constructor(public payload: any) {}
}

export class LoginError implements Action {
  readonly type = UserActionTypes.LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class GetProfile implements Action {
  readonly type = UserActionTypes.GET_PROFILE;
  constructor(public payload: any) {}
}
export class GetProfileComplete implements Action {
  readonly type = UserActionTypes.GET_PROFILE_COMPLETE;
  constructor(public payload: any) {}
}

export type UserActions
  = Login
  | LoginComplete
  | LoginError
  | GetProfile
  | GetProfileComplete;
