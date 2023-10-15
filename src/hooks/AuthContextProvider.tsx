import React, { createContext, useContext, ReactNode } from 'react';
import useAuth from './useAuth';
import { AuthState } from '../types/common';

interface AuthContextType {
  authState: AuthState;
  login: () => void;
  logout: () => void;
  redirect: (path: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
  }

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
};
