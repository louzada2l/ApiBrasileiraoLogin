import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFase } from '../api';
import PartidasList from './PartidasList';
import { Container, Row, Col } from 'react-bootstrap';

const Rodada = () => {
  const { rodada } = useParams();
  const [faseData, setFaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFase();
        setFaseData(data);
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
        <h1>Erro ao carregar os dados</h1>
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

  const partidas = faseData?.partidas[rodada] || [];

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Partidas da {rodada}</h1>
          <PartidasList partidas={{ [rodada]: partidas }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Rodada;
