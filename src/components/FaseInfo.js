import React from 'react';

const FaseInfo = ({ fase }) => {
  return (
    <div>
      <h2>Informações da Fase</h2>
      <p><strong>Nome:</strong> {fase.nome}</p>
      <p><strong>Slug:</strong> {fase.slug}</p>
      <p><strong>Status:</strong> {fase.status}</p>
      <p><strong>Tipo:</strong> {fase.tipo}</p>
    </div>
  );
};

export default FaseInfo;
