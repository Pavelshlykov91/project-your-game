/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import * as api from './api';
import type { RootState } from '../../redux/store';

function Navbar(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.users.user);

  // useEffect(() => {
  //   console.log(user?.id);
  // }, [user]);

  useEffect(() => {
    api
      .CheckFetch()
      .then((data) => dispatch({ type: 'users/check', payload: data }))
      .catch((err) => console.log(err));
  }, []);
  
  const logout = (): void => {
    api
      .logoutFetch()
      .then((data) => {
        dispatch({ type: 'user/logout', payload: data });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <header className="header">
        <div className="header__score">
          {user?.login}: {user?.score} баллов
        </div>
        <div className="header__nav">
          <Link to="/leaders" className="header__button outlined">
            Рейтинг игроков
          </Link>
          {user ? (
            <Link to="/" onClick={logout} style={{ textDecoration: 'none', color: 'white' }}>
              <div className="header__button ">Выйти</div>
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <div className="header__button ">Регистрация</div>
            </Link>
          )}
        </div>
      </header>
      <Outlet />
    </>
    // <header className="header">
    //   <div className="header__score">
    //     {user?.login}: {user?.score} баллов
    //   </div>
    //   <div className="header__nav">
    //     <Link to="/leaders" className="header__button outlined">
    //       Рейтинг игроков
    //     </Link>
    //     {user ? (
    //       <div className="header__button" onClick={logout}>
    //         Выйти
    //       </div>
    //     ) : (
    //       <Link to="/" className="header__button">
    //         Регистрация
    //       </Link>
    //     )}
    //   </div>
    // </header>
  );
}

export default Navbar;
