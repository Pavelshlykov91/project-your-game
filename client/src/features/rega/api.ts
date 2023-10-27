/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/prefer-default-export */
import { User } from './type';

export const RegFetch = async ({
    login,
    password
  }): Promise<User> => {
  
    
    
  const res = await (
    await fetch('/api/auth/reg', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
    })
  ).json();

  
  return res;
};
