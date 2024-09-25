import React, { useState, useEffect } from 'react';
import { getFase } from '../api'; 
import PartidasTable from './PartidasPage';
import { Container } from 'react-bootstrap';

const PartidasPage = () => {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFase(); 
        const allPartidas = Object.values(data.partidas).flat();
        setPartidas(allPartidas);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Container className="text-center mt-5">Carregando...</Container>;
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <h1>Erro ao carregar as partidas</h1>
        <p>{error.message}</p>
        {error.response && (
          <div>
            <h2>Detalhes do Erro:</h2>
            <pre>{JSON.stringify(error.response.data, null, 2)}</pre>
          </div>
        )}
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h1>Tabela de Partidas</h1>
      <PartidasTable partidas={partidas} />
    </Container>
  );
};

export default PartidasPage;
