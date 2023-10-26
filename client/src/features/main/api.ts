/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Theme } from './types';

export const fetchThemes = async (): Promise<Theme[]> => {
  
  const res = await (await fetch('/api/themes')).json();
  return res;
};
