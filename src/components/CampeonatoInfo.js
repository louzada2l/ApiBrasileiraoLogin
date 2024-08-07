import React from 'react';

const CampeonatoInfo = ({ campeonato }) => {
  return (
    <div>
      <h2>Informações do Campeonato</h2>
      <p><strong>Nome:</strong> {campeonato.nome}</p>
      <p><strong>Slug:</strong> {campeonato.slug}</p>
      <p><strong>Status:</strong> {campeonato.status}</p>
      <p><strong>Tipo:</strong> {campeonato.tipo}</p>
      <p><strong>Logo:</strong> <img src={campeonato.logo} alt={campeonato.nome} style={{ width: '100px' }} /></p>
    </div>
  );
};

export default CampeonatoInfo;
