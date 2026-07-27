import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const authApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const register = async (userData) => {
  const response = await authApi.post('/auth/register', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await authApi.post('/auth/login', credentials);
  return response.data;
};

export const refreshToken = async () => {
  const response = await authApi.post('/auth/refresh');
  return response.data;
};

export const logout = async () => {
  const response = await authApi.post('/auth/logout');
  return response.data;
};

export const getDashboard = async (accessToken) => {
  const response = await authApi.get('/dashboard', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

export default authApi;
