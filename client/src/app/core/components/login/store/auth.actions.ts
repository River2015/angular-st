import { Action } from '@ngrx/store';
import { IUser } from '../../../models/user';
export enum UserActionTypes {
  LOGIN = '[Login] LOGIN',
  LOGIN_COMPLETE = '[Login] LOGIN_COMPLETE',
  LOGIN_ERROR = '[Login] LOGIN_ERROR',
}
export class Login implements Action {
  readonly type = UserActionTypes.LOGIN;
  constructor(public payload: IUser) {}
}
export class LoginComplete implements Action {
  readonly type = UserActionTypes.LOGIN_COMPLETE;
  constructor(public payload: IUser) {}
}
export class LoginError implements Action {
  readonly type = UserActionTypes.LOGIN_ERROR;
  constructor(public payload: any) {}
}
export type UserActions
  = Login
  | LoginComplete
  | LoginError;
