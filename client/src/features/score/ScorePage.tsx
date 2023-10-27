import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './score.css';

// import PlayerItem from './PlayerItem';

import { useAppDispatch, type RootState } from '../../redux/store';
import * as api from './api'



const ScorePage = (): JSX.Element => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    api
      .fetchUsers()
      .then((data) => dispatch({ type: 'users/load', payload: data }))
      .catch((err) => console.log(err));
  }, []);

  const users = useSelector((store: RootState) => store.users.users);



  return (
   
        <div className="users__container">
ddddddddddd
          {users?.map((user?) => (
                <div key={user?.id} className="score__container">
                <h2>{user?.login}</h2>
                <h2>{user?.score} баллов</h2>
                </div>
           
          ))}
        </div>


  );
};

export default ScorePage;
