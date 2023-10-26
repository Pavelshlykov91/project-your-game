/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch} from '../../redux/store';
import * as api from './api'

function RegPageForm(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
 

  const dispatch = useAppDispatch();

  const onHandleUserAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log(login);
    
    api
    .RegFetch({login, password})
    .then((data) => dispatch({type: 'users/reg', payload: data }))
    .catch((err)=>console.log(err)
    )
    
  };
  
  return (
    <div>
      <form onSubmit={onHandleUserAdd}>
        <input value={login} onChange={(e) => setLogin(e.target.value)} name="login" type="text" />
       
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegPageForm;
