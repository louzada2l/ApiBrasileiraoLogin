import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Fase from './components/Fase';
import Rodada from './components/Rodada';
import PartidasPage from './components/PartidasPage'; // Supondo que você tenha esse componente
import TabelaClassificacao from './components/TabelaClassificacao'; // Importar o novo componente
import Login from './components/Login'; // Importar o componente de Login
import Register from './components/Register'; // Importar o componente de Registro

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fase" element={<Fase />} />
        <Route path="/fase/rodada/:rodada" element={<Rodada />} />
        <Route path="/partidas" element={<PartidasPage />} />
        <Route path="/tabela" element={<TabelaClassificacao />} />
        <Route path="/login" element={<Login />} /> {/* Nova rota de Login */}
        <Route path="/register" element={<Register />} /> {/* Nova rota de Registro */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
