import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';

const TabelaClassificacao = () => {
  const [tabela, setTabela] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTabela = async () => {
      try {
        const response = await axios.get('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', {
          headers: {
            Authorization: `Bearer live_a51a2ab3149d7186d87746509f1379`,
          },
        });
        setTabela(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTabela();
  }, []);

  if (loading) {
    return <Container className="text-center mt-5">Carregando...</Container>;
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <h1>Erro ao carregar a tabela</h1>
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
      <h1>Tabela de Classificação</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Time</th>
            <th>Jogos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Gols Pró</th>
            <th>Gols Contra</th>
            <th>Saldo de Gols</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {tabela.map((time) => (
            <tr key={time.time.time_id}>
              <td>{time.posicao}</td>
              <td>
                <img src={time.time.escudo} alt={time.time.nome_popular} style={{ width: 30, height: 30 }} />
                {time.time.nome_popular}
              </td>
              <td>{time.jogos}</td>
              <td>{time.vitorias}</td>
              <td>{time.empates}</td>
              <td>{time.derrotas}</td>
              <td>{time.gols_pro}</td>
              <td>{time.gols_contra}</td>
              <td>{time.saldo_gols}</td>
              <td>{time.pontos}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TabelaClassificacao;
