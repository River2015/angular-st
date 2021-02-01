import { CoursesState } from '../components/courses/store/study-courses.reducer';

export interface CoursesAppState {
  readonly courses: CoursesState;
}
