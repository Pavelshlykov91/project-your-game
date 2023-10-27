import type { Theme } from '../features/main/types';
import { User } from '../features/rega/type';

export type ThemeState = {
  themes: Theme[];
};

export type UsersState = {
  users: User[];
};

export type Action =
  | { type: 'themes/load'; payload: Theme[] }
  | { type: 'users/reg'; payload: User };
