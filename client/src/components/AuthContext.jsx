import React, { createContext, useState, useEffect } from "react";
import {jwtDecode} from 'jwt-decode'; // Ensure this import is correct

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Check if this function is being used correctly
        setUser(decodedToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    try {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    } catch (error) {
      console.error('Failed to decode token:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
