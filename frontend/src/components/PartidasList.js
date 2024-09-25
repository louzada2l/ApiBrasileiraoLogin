import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PartidasList = ({ partidas }) => {
  return (
    <ListGroup>
      {Object.keys(partidas).map((rodada, index) => (
        partidas[rodada].map(partida => (
          <ListGroup.Item key={partida.partida_id}>
            <div className="d-flex justify-content-between">
              <div>
                <img src={partida.time_mandante.escudo} alt={partida.time_mandante.nome_popular} style={{ width: 30, height: 30 }} />
                <strong>{partida.time_mandante.nome_popular}</strong>
              </div>
              <div>
                <strong>{partida.placar}</strong>
              </div>
              <div>
                <img src={partida.time_visitante.escudo} alt={partida.time_visitante.nome_popular} style={{ width: 30, height: 30 }} />
                <strong>{partida.time_visitante.nome_popular}</strong>
              </div>
            </div>
          </ListGroup.Item>
        ))
      ))}
    </ListGroup>
  );
};

export default PartidasList;
