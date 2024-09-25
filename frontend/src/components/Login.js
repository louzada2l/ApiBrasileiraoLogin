// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Importe o contexto
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Pegue a função de login do contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
      console.log('Login bem-sucedido', response.data);
      login(); // Chame a função de login ao fazer login
      navigate('/fase'); // Redireciona para a página após o login
    } catch (error) {
      console.error('Erro no login', error.response.data);
      // Aqui você pode mostrar uma mensagem de erro ao usuário
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuário:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
