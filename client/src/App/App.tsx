import React, { useEffect } from 'react';

import MainPage from '../features/main/MainPage';
import './App.css';
import * as api from '../features/main/api';
import { useAppDispatch } from '../redux/store';
// import RegPageForm from '../features/rega/RegPageForm';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    api
      .fetchThemes()
      .then((data) => dispatch({ type: 'themes/load', payload: data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <RegPageForm /> */}
      <MainPage />
    </div>
  );
}

export default App;
