// src/lib/api.js
const API_URL = 'http://localhost:3000';

const handleRes = async (res) => {
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'Ошибка сервера');
  return json.data;
};

export const api = {
  register: (data) => 
    fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(handleRes),

  login: (data) =>
    fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(handleRes),

  // потом добавишь товары, магазины и т.д.
};