/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/default-param-last */
import type { State } from '../../features/navbar/type';
import type { Action, UsersState } from '../types';

export const initState: State = { user: null, errorMessage: '' }

const navbarReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
      case 'users/logout':
          if (action.payload.message === 'Успешный выход') {
            return {
              ...state,
              user: null,
              errorMessage: '',
            }
          }  
          return {
            ...state,
            errorMessage: action.payload.message,
          }
    
    default:
      return state;
  }
};

export default navbarReducer;