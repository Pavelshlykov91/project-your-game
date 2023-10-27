import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import regReducer from './regReducer';
import navbarReducer from './navbarReducer';

const rootReducer = combineReducers({
  main: mainReducer,
  users:regReducer,
});

export default rootReducer;
