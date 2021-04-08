import {AuthType} from './Auth.types';

// const INITIAL_STATE = {
//   email: ' ',
//   password: ' ',
// };

const INITIAL_STATE = {
  Data: [],
  error: '',
  realTimeEmail: '',
  realTimePass: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthType.LOGIN_SUCCESS:
      return {
        ...state,
        Data: [action.payload],
      };
    case AuthType.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case AuthType.EMAIL_CHANGE:
      return {
        ...state,
        realTimeEmail: action.payload,
      };
    case AuthType.PASSWORD_CHANGE:
      return {
        ...state,
        realTimePass: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
