import type { Action, ThemeState } from '../types';

export const initState: ThemeState = {
  themes: [],
};

const mainReducer = (state: ThemeState = initState, action: Action): ThemeState => {
  switch (action.type) {
    case 'themes/load':
      return { ...state, themes: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
