import React, { useEffect } from 'react';

import MainPage from '../features/main/MainPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as api from '../features/main/api';
import * as api2 from '../features/navbar/api';
import { useAppDispatch } from '../redux/store';

import ScorePage from '../features/score/ScorePage';
import RegPageForm from '../features/rega/RegPageForm';
import Navbar from '../features/navbar/NavBar';



function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    api
      .fetchThemes()
      .then((data) => dispatch({ type: 'themes/load', payload: data }))
      .catch((err) => console.log(err));
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<RegPageForm />} />
        <Route path="/themes" element={<MainPage />} />
        <Route path="/users" element={<ScorePage />} />
      </Route>
    </Routes>


  );
}

export default App;
