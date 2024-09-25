import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Verifica se o token existe no localStorage
  return token ? children : <Navigate to="/login" />; // Se não houver token, redireciona para o login
};

export default PrivateRoute;
