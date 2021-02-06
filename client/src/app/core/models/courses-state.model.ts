import { CoursesState } from '../components/courses/store/courses.reducer';
import {UserState} from '../components/login/store/user.reducer';

export interface CoursesAppState {
  readonly courses: CoursesState;
  readonly user: UserState;
}
