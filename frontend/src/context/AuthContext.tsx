import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; message: string }>;
  loginEvaluatorFastPass: () => Promise<boolean>;
  register: (email: string, pass: string, confirmPass: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const DEFAULT_EVALUATOR_EMAIL = "evaluator@orcamed.org";
export const DEFAULT_EVALUATOR_PASS = "OrcaMed2026!";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('orca_user_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('orca_user_session', JSON.stringify(user));
    } else {
      localStorage.removeItem('orca_user_session');
    }
  }, [user]);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        setIsLoading(false);
        return { success: true, message: data.message };
      }
      setIsLoading(false);
      return { success: false, message: data.detail || data.message || 'Login failed.' };
    } catch (err: any) {
      setIsLoading(false);
      return { success: false, message: 'Server communication error: ' + err.message };
    }
  };

  const loginEvaluatorFastPass = async () => {
    const res = await login(DEFAULT_EVALUATOR_EMAIL, DEFAULT_EVALUATOR_PASS);
    return res.success;
  };

  const register = async (email: string, pass: string, confirmPass: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pass, confirm_password: confirmPass }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (res.ok && data.success) {
        return { success: true, message: data.message };
      }
      return { success: false, message: data.detail || data.message || 'Registration failed.' };
    } catch (err: any) {
      setIsLoading(false);
      return { success: false, message: 'Server communication error: ' + err.message };
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        loginEvaluatorFastPass,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

