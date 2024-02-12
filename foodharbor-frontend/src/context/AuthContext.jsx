import { createContext, useContext, useState } from "react";
import { BASE_URL, LOGIN_URL, REFRESH_URL, REGISTER_URL } from "../services/api";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const navigate = useNavigate();

  const Login = async (email, password) => {
    let headers = {
      "Content-Type": "application/json",
    };

    const response = await axios
      .post(`${BASE_URL}${LOGIN_URL}`, { email, password }, { headers })
      .then((response) => {
        console.log("data:", response.data);
        setAuthToken(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((error) => {
        console.error("erro:", error);
      });
  };

  const Register = async (email, password, firstName, lastName) => {

    const response = await axios.post(`${BASE_URL}${REGISTER_URL}`, {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    }).then((response) => {
      navigate("/login");
    }).catch((error) => {
      console.error("error:", error);
    })
  }

  const Logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  const isValidToken = async () => {
    console.log("Validou o token");
    const payload = jwtDecode(authToken.access);
    return Date.now() < payload.exp * 1000;
  };

  const UpdateToken = async () => {
    console.log("deu update no token");
    if (isValidToken(authToken.access)) {
      return authToken;
    }

    let headers = {
      "Content-Type": "application/json",
    };

    let dataToSend = {
      refresh: authToken?.refresh,
    };

    const response = await axios
      .post(`${BASE_URL}${REFRESH_URL}`, dataToSend, { headers })
      .then((response) => {
        setAuthToken(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("erro:", error);
        Logout();
      });
  };

  const contextData = {
    user: user,
    authToken: authToken,
    Login: Login,
    Register: Register,
    Logout: Logout,
    isValidToken: isValidToken,
    UpdateToken: UpdateToken,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };
