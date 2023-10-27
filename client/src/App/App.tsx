import React, { useEffect } from 'react';

// import MainPage from '../features/main/MainPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import * as api from '../features/main/api';
import { useAppDispatch } from '../redux/store';
import RegPageForm from '../features/rega/RegPageForm';
import Navbar from '../features/navbar/NavBar';
import MainPage from '../features/main/MainPage';

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
      </Route>
    </Routes>
  );
}

export default App;
