import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuthentication = () => {
    setIsAuthenticated(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
}
