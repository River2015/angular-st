import { createSelector } from '@ngrx/store';
import {CoursesState} from '../../courses/store/courses.reducer';

export interface UserState {
  user: {
    name: string,
    surname: string,
  };
  token: string;
  isLoading: boolean;
  error: boolean;
}

export interface AppState {
  user: UserState;
  courses: CoursesState;
}

export const selectUsers = (state: AppState) => state.user;
export const selectCourses = (state: AppState) => state.courses;

export const selectUser = createSelector(
  selectUsers,
  (state: UserState) => state.user
);

export const selectToken = createSelector(
  selectUsers,
  (state: UserState) => state.token
);

export const selectCourse = createSelector(
  selectCourses,
  (state: CoursesState) => state.list
);

