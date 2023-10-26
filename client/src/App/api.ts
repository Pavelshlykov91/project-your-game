import type { Theme } from '../features/main/types';

export const fetchThemes = async (): Promise<Theme[]> => {
  const res = await fetch('/api/themes');
  return res.json();
};
