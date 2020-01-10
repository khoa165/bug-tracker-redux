import { combineReducers } from 'redux';
import bugReducer from './bugReducer';
import devReducer from './devReducer';

export default combineReducers({
  bug: bugReducer,
  dev: devReducer
});
