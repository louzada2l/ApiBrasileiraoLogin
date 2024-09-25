import React, { useState, useEffect } from 'react';
import { getFase } from '../api';
import FaseInfo from './FaseInfo';
import CampeonatoInfo from './CampeonatoInfo';
import { Link } from 'react-router-dom';
import '../index.css'
import { Button, Container, Row, Col } from 'react-bootstrap';

const Fase = () => {
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

  return (
    <Container className="mt-5">
      {faseData && (
        <>
        <div className='card-info-brasileirao'>
          <FaseInfo fase={faseData} />
          <CampeonatoInfo campeonato={faseData.campeonato} /> 
        </div>
          
          <Row className="mt-4">
            <Col>
              <h2>Rodadas</h2>
              <div>
                {Object.keys(faseData.partidas).map((rodada, index) => (
                  <Link to={`/fase/rodada/${rodada}`} key={index}>
                    <Button variant="secondary" className="m-2 btn-rodadas-brasileirao">
                      {rodada}
                    </Button>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Link to="/tabela">
                <Button variant="info" className="ml-2 btn-brasileirao">Ver Tabela de Classificação</Button>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Fase;
