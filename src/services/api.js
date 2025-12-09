const API_URL = "http://localhost:3000/api";

async function handleResponse(response) {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Что-то пошло не так");
  }

  // ОТЛАДКА — очень полезно оставить на время разработки
  console.log("%cОтвет от сервера (auth):", "color: #4CAF50; font-weight: bold;", data);

  return data;
}

// Универсальная функция сохранения токена и пользователя
function saveAuthData(data) {
  // Ищем токен под всеми популярными именами
  const token =
    data.token ||
    data.jwt ||
    data.accessToken ||
    data.access_token ||
    data.bearer ||
    data.authToken ||
    data.authentication;

  // Ищем объект пользователя
  const user =
    data.user ||
    data.data ||
    data.profile ||
    data.account ||
    data.customer;

  if (token) {
    localStorage.setItem("token", token);
    console.log("%cТокен успешно сохранён", "color: #4CAF50; font-weight: bold;", token.substring(0, 20) + "...");
  } else {
    console.warn("%cВнимание: токен не найден в ответе сервера!", "color: #FF9800; font-weight: bold;", data);
  }

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Уведомляем приложение об изменении статуса авторизации
  window.dispatchEvent(new Event("authChange"));
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
  saveAuthData(data);
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
  saveAuthData(data);
  return data;
}

// Выход
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user"); // чистим за собой
  window.dispatchEvent(new Event("authChange"));
  window.location.href = "/login";
}

// Проверка, авторизован ли пользователь
export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return !!token && token !== "undefined" && token !== "null";
}

// Получить токен
export function getToken() {
  return localStorage.getItem("token");
}

// Получить сохранённого пользователя
export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}