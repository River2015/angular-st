import {Action, createAction, props} from '@ngrx/store';
import {ICourse} from '../../../models/course';

export enum CoursesActionTypes {
  LOAD_COURSES = '[COURSES] Load Courses',
  LOAD_COURSES_SUCCESS = '[COURSES] Load Courses Success',
  LOAD_COURSES_FAILURE = '[COURSES] Load Courses Failure',
  LOAD_COURSE = '[COURSES] Load Course',
  LOAD_COURSE_SUCCESS = '[COURSES] Load Course Success',
  LOAD_COURSE_FAILURE = '[COURSES] Load Course Failure',
  ADD_COURSE = '[COURSES] Add Course',
  ADD_COURSE_SUCCESS = '[COURSES] Add Course Success',
  ADD_COURSE_FAILURE = '[COURSES] Add Course Failure',
  EDIT_COURSE = '[COURSES] Edit Course',
  EDIT_COURSE_SUCCESS = '[COURSES] Edit Course Success',
  EDIT_COURSE_FAILURE = '[COURSES] Edit Course Failure',
  DELETE_COURSE = '[COURSES] Delete Course',
  DELETE_COURSE_SUCCESS = '[COURSES] Delete Course Success',
  DELETE_COURSE_FAILURE = '[COURSES] Delete Course Failure'
}


export class LoadCoursesAction implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES;
}

export class LoadCoursesSuccessAction implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_SUCCESS;
  constructor(public payload: Array<ICourse>) {}

}

export class LoadCoursesFailureAction implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_FAILURE;
  constructor(public payload: string) {}
}
export class AddCourseAction implements Action {
  readonly type = CoursesActionTypes.ADD_COURSE;
  constructor(public payload: ICourse) { }
}
export class AddCourseSuccessAction implements Action {
  readonly type = CoursesActionTypes.ADD_COURSE_SUCCESS;
  constructor(public payload: ICourse) { }
}
export class AddCourseFailureAction implements Action {
  readonly type = CoursesActionTypes.ADD_COURSE_FAILURE;
  constructor(public payload: Error) { }
}

export class EditCourseAction implements Action {
  readonly type = CoursesActionTypes.EDIT_COURSE;
  constructor(public payload: { id: number, course: ICourse; }) {}
}

export class EditCourseSuccessAction implements Action {
  readonly type = CoursesActionTypes.EDIT_COURSE_SUCCESS;
  constructor(public payload: { id: number, course: ICourse; }) {}
}

export class EditCourseFailureAction implements Action {
  readonly type = CoursesActionTypes.EDIT_COURSE_FAILURE;
  constructor(public payload: Error) { }
}


export class DeleteCourseAction implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE;
  constructor(public payload: number) { }
}

export class DeleteCourseSuccessAction implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_SUCCESS;
  constructor(public payload: number) { }
}
export class DeleteCourseFailureAction implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_FAILURE;
  constructor(public payload: string) { }
}

export type CoursesAction = AddCourseAction |
  AddCourseSuccessAction |
  AddCourseFailureAction |
  DeleteCourseAction |
  DeleteCourseSuccessAction |
  DeleteCourseFailureAction |
  LoadCoursesAction |
  LoadCoursesFailureAction |
  LoadCoursesSuccessAction |
  EditCourseAction |
  EditCourseSuccessAction |
  EditCourseFailureAction

