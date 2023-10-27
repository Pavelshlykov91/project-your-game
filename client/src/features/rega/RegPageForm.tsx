/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import * as api from './api';

function RegPageForm(): JSX.Element {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const onHandleUserAdd = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    api
      .RegFetch({ login, password })
      .then((data) => {
        console.log(data);
        dispatch({ type: 'users/reg', payload: data });
        navigate('/themes');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundImage: 'url("../../../public/fon.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // чтобы контейнер занимал всю высоту экрана
      }}
    >
      <form onSubmit={onHandleUserAdd}>
        <input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          name="login"
          type="text"
          style={{
            padding: '10px',
            border: '1px solid gray',
            borderRadius: '5px',
            marginRight: '10px',
            marginTop: '20px', // добавляем отступ сверху
          }}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="text"
          style={{
            padding: '10px',
            border: '1px solid gray',
            borderRadius: '5px',
            marginRight: '10px',
            marginTop: '20px', // добавляем отступ сверху
          }}
        />

        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: 'rgb(245, 158, 11)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginTop: '20px', // добавляем отступ сверху
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegPageForm;
