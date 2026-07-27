/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { refreshToken, login as loginRequest, logout as logoutRequest, register as registerRequest, getDashboard } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    const data = await loginRequest(credentials);
    setAccessToken(data.accessToken);
    setUser(data.user);
    return data;
  };

  const register = async (userData) => {
    return await registerRequest(userData);
  };

  const handleLogout = async () => {
    await logoutRequest();
    setUser(null);
    setAccessToken(null);
  };

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const data = await refreshToken();
        if (data.accessToken) {
          setAccessToken(data.accessToken);
          const dashboardData = await getDashboard(data.accessToken);
          setUser(dashboardData.user);
        }
      } catch {
        setUser(null);
        setAccessToken(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, accessToken, loading, login, register, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
