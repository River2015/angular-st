import { createSelector } from '@ngrx/store';

export interface UserState {
  user: {
    name: string,
    surname: string,
  };
  loggedIn: boolean;
  isLoading: boolean;
  error: boolean;
}

export interface AppState {
  user: UserState;
}

export const selectUsers = (state: AppState) => state.user;

export const selectUser = createSelector(
  selectUsers,
  (state: UserState) => state.user
);
