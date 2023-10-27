import type { Theme } from '../features/main/types';
import { User } from '../features/rega/type';

export type ThemeState = {
  themes: Theme[];
};

export type UsersState = {
  user: User|undefined
};



export type Action = 
|{ type: 'themes/load'; payload: Theme[]}
|{ type: 'users/reg'; payload: User }
|{ type: 'users/check'; payload: User }
|{ type: 'users/logout'; payload:string}

