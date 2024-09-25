const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Configurando conexão com MySQL
const db = mysql.createConnection({
  host: 'localhost',  // altere conforme sua configuração
  user: 'root',       // seu usuário do MySQL
  password: 'lulukikinhas',       // sua senha do MySQL
  database: 'react_login_db', // banco de dados
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao MySQL');
});

// Rota de Registro
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao registrar');
    }
    res.status(200).send('Usuário registrado com sucesso');
  });
});

// Rota de Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).send('Usuário não encontrado');
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send('Senha incorreta');
    }

    // Gera token JWT
    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });

    res.status(200).send({ auth: true, token });
  });
});

// Servidor escutando na porta 3001
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
