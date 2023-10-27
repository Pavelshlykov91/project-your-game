import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import regReducer from './regReducer';
import navbarReducer from './navbarReducer';

const rootReducer = combineReducers({
  main: mainReducer,
  users:regReducer,
  user:navbarReducer,
});

export default rootReducer;
