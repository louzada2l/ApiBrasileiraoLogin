import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <section>
      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h1 style={{fontSize: '65px', fontWeight: '600'}}>Bem-vindo as informações do Brasileirão Seria A</h1>
            <div className="mt-4">
              <Link to="/fase">
                <Button className='btn-brasileirao'>Ir para a Fase</Button>
              </Link>
            </div>
            <img src='https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png'></img> 
            <h2>Brasileirão Serie A</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
