/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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

      // case 'users/logout':
      //     if (action.payload.message === 'Успешный выход') {
      //       return {
      //         ...state,
      //         user: null,
      //         errorMessage: '',
      //       }
      //     }  
          return {
            ...state,
            errorMessage: action.payload.message,
          }
    
    default:
      return state;
  }
};

export default regReducer;