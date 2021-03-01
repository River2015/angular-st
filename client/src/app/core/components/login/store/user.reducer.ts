import {UserActions, UserActionTypes} from './user.actions';

export interface UserState {
  user: {
    first: string,
    last: string,
  };
  token: string;
  isLoading: boolean;
  error: boolean;
}

const initialState: UserState = {
  user: {
    first: null,
    last: null,
  },
  token: null,
  isLoading: false,
  error: false,
};

export function UserReducer(state: UserState = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        error: false,
        isLoading: true
      };
    case UserActionTypes.LOGIN_COMPLETE:
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
      };
    case UserActionTypes.LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        error: true,
        isLoading: false,
      };
    case UserActionTypes.GET_PROFILE:
      return {
        ...state,
        error: false,
        isLoading: true
      };
    case UserActionTypes.GET_PROFILE_COMPLETE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
