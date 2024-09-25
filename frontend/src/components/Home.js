import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section>
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1 style={{ fontSize: '65px', fontWeight: '600' }}>
              Bem-vindo às informações do Brasileirão Série A
            </h1>
            <div className="mt-4">
              <Link to="/fase">
                <Button className='btn-brasileirao'>Ir para a Fase</Button>
              </Link>
              <Link to="/register">
                <Button className='btn-brasileirao mt-3'>Registrar-se</Button> {/* Novo botão para registro */}
              </Link>
            </div>
            <img src='https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png' alt="Brasileirão Série A" />
            <h2>Brasileirão Série A</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
