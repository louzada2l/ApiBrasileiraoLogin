import axios from 'axios';

const apiUrl = 'https://api.api-futebol.com.br/v1';
const token = 'live_a51a2ab3149d7186d87746509f1379';

const headers = {
  Authorization: `Bearer ${token}`,
};

export const getFase = async () => {
  const response = await axios.get(`${apiUrl}/campeonatos/10/fases/506`, { headers });
  return response.data;
};
