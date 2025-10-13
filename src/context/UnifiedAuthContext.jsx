import React, { createContext, useContext, useEffect, useState } from 'react';
import { authAPI } from '../lib/api';

const UnifiedAuthContext = createContext();

export const useAuth = () => {
  const context = useContext(UnifiedAuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(false);
  const [permissions, setPermissions] = useState(null);

  useEffect(() => {
    if (user && token) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, [user, token]);

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      if (token && !user) {
        setLoading(true);
        try {
          const response = await authAPI.verifyToken();
          setUser(response.data.user);
          setPermissions(response.data.user.permissions);
        } catch (error) {
          console.error('Auth check failed:', error);
          setToken(null);
          setUser(null);
          setPermissions(null);
        } finally {
          setLoading(false);
        }
      } else if (user && user.permissions) {
        setPermissions(user.permissions);
      }
    };

    checkAuth();
  }, [token, user]);

  const login = async (email, password, role = null) => {
    setLoading(true);
    try {
      const response = await authAPI.login({ email, password, role });
      setUser(response.data.user);
      setToken(response.data.token);
      setPermissions(response.data.user.permissions);
      setLoading(false);
      return { success: true, user: response.data.user };
    } catch (error) {
      setLoading(false);
      return { success: false, message: error.message };
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await authAPI.register(userData);
      setUser(response.data.user);
      setToken(response.data.token);
      setLoading(false);
      return { success: true, user: response.data.user };
    } catch (error) {
      setLoading(false);
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setToken(null);
      setPermissions(null);
    }
  };

  const updateProfile = async (userData) => {
    try {
      const response = await authAPI.updateProfile(userData);
      setUser(response.data.user);
      return { success: true, user: response.data.user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const changePassword = async (passwordData) => {
    try {
      await authAPI.changePassword(passwordData);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // Permission checking functions
  const hasPermission = (resource, action) => {
    if (!permissions) return false;
    if (user?.role === 'superadmin') return true;
    return permissions[resource] && permissions[resource][action];
  };

  const isAdmin = () => {
    return user && ['admin', 'superadmin'].includes(user.role);
  };

  const isSuperAdmin = () => {
    return user && user.role === 'superadmin';
  };

  const isSeller = () => {
    return user && user.role === 'seller';
  };

  const isUser = () => {
    return user && user.role === 'user';
  };

  const isAuthenticated = () => {
    return !!user && !!token;
  };

  const getRole = () => {
    return user?.role || null;
  };

  const getUserId = () => {
    return user?.id || null;
  };

  const getUserName = () => {
    return user?.name || null;
  };

  const getUserEmail = () => {
    return user?.email || null;
  };

  const value = {
    user,
    token,
    loading,
    permissions,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    hasPermission,
    isAdmin,
    isSuperAdmin,
    isSeller,
    isUser,
    isAuthenticated,
    getRole,
    getUserId,
    getUserName,
    getUserEmail
  };

  return (
    <UnifiedAuthContext.Provider value={value}>
      {children}
    </UnifiedAuthContext.Provider>
  );
};
