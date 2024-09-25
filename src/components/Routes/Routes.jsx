import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Визначаємо шлях для роута */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes