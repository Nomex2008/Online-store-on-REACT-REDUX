import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes.js';
import { Home } from '../Home/Home.jsx';
import SingleProduct from '../Products/SingleProduct.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Визначаємо шлях для роута */}
      <Route path="/" element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
    </Routes>
  );
};

export default AppRoutes