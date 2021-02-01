import {CoursesAction, CoursesActionTypes} from './study-courses.actions';
import {ICourse} from '../../../models/course';

export interface CoursesState {
  list: ICourse[];
  loading: boolean;
  error: Error;
}

const initialState: CoursesState = {
  list: [],
  loading: false,
  error: undefined
};

export function CoursesReducer(state: CoursesState = initialState, action: CoursesAction) {
  switch (action.type) {
    case CoursesActionTypes.LOAD_COURSES:
      return {
        ...state,
        loading: true
      };
    case CoursesActionTypes.LOAD_COURSES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case CoursesActionTypes.LOAD_COURSES_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case CoursesActionTypes.ADD_COURSE:
      return {
        ...state,
        loading: true
      };
    case CoursesActionTypes.ADD_COURSE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case CoursesActionTypes.ADD_COURSE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case CoursesActionTypes.EDIT_COURSE:
      return {
        ...state,
        loading: true
      };
    case CoursesActionTypes.EDIT_COURSE_SUCCESS:
      return {
        ...state,
        list: state.list.forEach((course) => {
          if (course.id === action.payload.course.id) {
            course.name = action.payload.course.name;
            course.description = action.payload.course.description;
            course.date = action.payload.course.date;
            course.length = action.payload.course.length;
            course.isTopRated = action.payload.course.isTopRated;
            course.author = action.payload.course.author ;
          }
          return course;
        }),
        loading: false
      };
    case CoursesActionTypes.EDIT_COURSE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case CoursesActionTypes.DELETE_COURSE:
      return {
        ...state,
        loading: true
      };
    case CoursesActionTypes.DELETE_COURSE_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case CoursesActionTypes.DELETE_COURSE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
