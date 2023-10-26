import type { Theme } from '../features/main/types';

export type ThemeState = {
  themes: Theme[];
};

export type Action = { type: 'themes/load'; payload: Theme[] };
