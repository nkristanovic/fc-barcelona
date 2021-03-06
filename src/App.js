import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
