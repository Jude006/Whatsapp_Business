import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
  try {
    const token = localStorage.getItem('userToken');
    if (!token) {
      setLoading(false);
      return;
    }

    const response = await api.get('/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.data.success) {
      setUser(response.data.user);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      
      // Fix: Add null check for whatsapp field
      if (response.data.user.whatsapp && !response.data.user.whatsapp.connected) {
        navigate('/dashboard/connect-whatsapp');
      } else {
        navigate('/dashboard');
      }
    } else {
      logout();
    }
  } catch (error) {
    console.error('Auth check error:', error);
    logout();
  } finally {
    setLoading(false);
  }
};


  const register = async (userData) => {
    try {
      setError('');
      const response = await api.post('/auth/register', userData);

      if (response.data.success) {
        localStorage.setItem('userToken', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        setUser(response.data.user);
        navigate('/dashboard/connect-whatsapp'); 
        return { success: true, data: response.data };
      } else {
        setError(response.data.message);
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Network error. Please try again.';
      setError(message);
      return { success: false, error: message };
    }
  };

const login = async (credentials) => {
  try {
    setError('');
    const response = await api.post('/auth/login', credentials);

    if (response.data.success) {
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      setUser(response.data.user);
      
      if (response.data.user.whatsapp && response.data.user.whatsapp.connected) {
        navigate('/dashboard');
      } else {
        navigate('/dashboard/connect-whatsapp');
      }
      return { success: true, data: response.data };
    } else {
      setError(response.data.message);
      return { success: false, error: response.data.message };
    }
  } catch (error) {
    const message = error.response?.data?.message || 'Network error. Please try again.';
    setError(message);
    return { success: false, error: message };
  }
};

  const forgotPassword = async (email) => {
    try {
      setError('');
      const response = await api.post('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Network error. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const verifyResetCode = async (data) => {
    try {
      setError('');
      const response = await api.post('/auth/verify-reset-code', data);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Network error. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const resetPassword = async (data) => {
    try {
      setError('');
      const response = await api.post('/auth/reset-password', data);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Network error. Please try again.';
      setError(message);
      return { success: false, message };
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
      setUser(null);
      setError('');
      navigate('/login');
    }
  };

  const clearError = () => {
    setError('');
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    forgotPassword,
    verifyResetCode,
    resetPassword,
    clearError,
    isAuthenticated: !!user,
    isWhatsAppConnected: user?.whatsapp?.connected || false
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};