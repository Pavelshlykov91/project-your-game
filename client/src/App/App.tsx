import React, { useEffect } from 'react';
import MainPage from '../features/main/MainPage';
import './App.css';
import * as api from '../features/main/api';
import { useAppDispatch } from '../redux/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    api
      .fetchThemes()
      .then((data) => dispatch({ type: 'themes/load', payload: data }))
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
