/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
import type { User } from './type';

export const fetchUsers = async (): Promise<User[]> => {
  console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    const res = await (await fetch('/api/users')).json();




    return res;
  };

  