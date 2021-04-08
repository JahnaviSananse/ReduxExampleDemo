import {AuthType} from './Auth.types';
export const LoginSuccess = userData => ({
  type: AuthType.LOGIN_SUCCESS,
  payload: userData,
});
export const LoginFail = error => ({
  type: AuthType.LOGIN_FAILURE,
  payload: error,
});
export const EmailTextChange = email => ({
  type: AuthType.EMAIL_CHANGE,
  payload: email,
});
export const PasswordTextChange = pass => ({
  type: AuthType.PASSWORD_CHANGE,
  payload: pass,
});
