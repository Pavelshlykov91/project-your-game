import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import regReducer from './regReducer';

const rootReducer = combineReducers({
  main: mainReducer,
  users: regReducer,
});

export default rootReducer;
