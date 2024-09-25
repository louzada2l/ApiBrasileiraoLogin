import axios from 'axios';

const apiUrl = 'https://api.api-futebol.com.br/v1';
const token = 'live_8b6efa30f0bdc2ed0e408dc9fd6d6c';

const headers = {
  Authorization: `Bearer ${token}`,
};

export const getFase = async () => {
  const response = await axios.get(`${apiUrl}/campeonatos/10/fases/506`, { headers });
  return response.data;
};
