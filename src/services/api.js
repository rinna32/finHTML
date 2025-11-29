
const API_URL = "http://localhost:3000/api";


async function handleResponse(response) {
  const data = await response.json();

  if (!response.ok) {
   
    throw new Error(data.error || data.message || "Что-то пошло не так");
  }

  return data; 
}

// Регистрация
export async function register(userData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await handleResponse(response);

  // Сохраняем токен, если он пришёл
  if (data.token) {
    localStorage.setItem("token", data.token);
    window.dispatchEvent(new Event("authChange")); // ← обновляем хедер
  }

  return data;
}

// Вход
export async function login(userData) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await handleResponse(response);

 
  if (data.token) {
    localStorage.setItem("token", data.token);
    window.dispatchEvent(new Event("authChange")); 
  }

  return data;
}


export function logout() {
  localStorage.removeItem("token");
  window.dispatchEvent(new Event("authChange"));
  window.location.href = "/login"; 
}


export function isLoggedIn() {
  return !!localStorage.getItem("token");
}


export function getToken() {
  return localStorage.getItem("token");
}