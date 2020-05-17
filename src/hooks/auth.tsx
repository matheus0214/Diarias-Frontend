import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface ContextProps {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthProviderData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ContextProps>(() => {
    const token = localStorage.getItem('@Diarias/token');
    const user = localStorage.getItem('@Diarias/user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as ContextProps;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<ContextProps>('session', {
      email,
      password,
    });

    const { token, user } = response.data;

    /** Save datas in local storage */
    localStorage.setItem('@Diarias/token', token);
    localStorage.setItem('@Diarias/user', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Diarias/token');
    localStorage.removeItem('@Diarias/user');
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthProviderData {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('authContext need be wrapper in AuthProvider');
  }

  return authContext;
}

export { AuthProvider, useAuth };
