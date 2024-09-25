// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Home from './components/Home';
import Register from './components/Register'; // Importar o novo componente de registro
import Fase from './components/Fase';
import Rodada from './components/Rodada';
import PartidasPage from './components/PartidasPage';
import TabelaClassificacao from './components/TabelaClassificacao';
import Login from './components/Login';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} /> {/* Rota de registro */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/fase"
          element={
            <PrivateRoute>
              <Fase />
            </PrivateRoute>
          }
        />
        <Route
          path="/fase/rodada/:rodada"
          element={
            <PrivateRoute>
              <Rodada />
            </PrivateRoute>
          }
        />
        <Route
          path="/partidas"
          element={
            <PrivateRoute>
              <PartidasPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tabela"
          element={
            <PrivateRoute>
              <TabelaClassificacao />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
