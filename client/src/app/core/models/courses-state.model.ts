import { CoursesState } from '../components/courses/store/courses.reducer';

export interface CoursesAppState {
  readonly courses: CoursesState;
}
