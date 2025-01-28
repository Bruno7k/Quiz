import axios from "axios";

const API_URL = "http://localhost:8080";

/**
 * Instância do axios configurada com URL base e suporte a cookies.
 * Utilizada para requisições à API com autenticação baseada em token.
 */
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

/**
 * Interceptor para adicionar o token de autenticação ao cabeçalho de todas as requisições.
 * O token é recuperado do localStorage.
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
