import {combineReducers, createStore} from 'redux';
import authReducer from './Auth/Auth.reducer';

const rootReducer = combineReducers({
  Auth: authReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
