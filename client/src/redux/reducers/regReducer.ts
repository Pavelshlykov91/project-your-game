/* eslint-disable @typescript-eslint/default-param-last */
import type { Action, UsersState } from '../types';

export const initState: UsersState = {
  users: [],
};

const regReducer = (state: UsersState = initState, action: Action): UsersState => {
  switch (action.type) {
    case 'users/reg': 
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default regReducer;