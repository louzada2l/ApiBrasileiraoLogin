import React from 'react';
import { Table } from 'react-bootstrap';

const PartidasTable = ({ partidas }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mandante</th>
          <th>Visitante</th>
          <th>Placar</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {partidas.map(partida => (
          <tr key={partida.partida_id}>
            <td>
              <img src={partida.time_mandante.escudo} alt={partida.time_mandante.nome_popular} style={{ width: 30, height: 30 }} />
              {partida.time_mandante.nome_popular}
            </td>
            <td>
              <img src={partida.time_visitante.escudo} alt={partida.time_visitante.nome_popular} style={{ width: 30, height: 30 }} />
              {partida.time_visitante.nome_popular}
            </td>
            <td>{partida.placar}</td>
            <td>{partida.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PartidasTable;
