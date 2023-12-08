import { createContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (e) => {
    e.preventDefault();
    console.log("Form Enviado");
  };

  const contextData = {
    login: login,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};