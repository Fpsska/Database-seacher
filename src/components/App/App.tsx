import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../common/Layout';
import MainPage from '../pages/MainPage';

import '../../assets/_style.scss';
import '../../assets/_media.scss';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/WelbeX-Task" element={<Layout/>}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
