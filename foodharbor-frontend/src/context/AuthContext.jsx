import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL, LOGIN_URL, REFRESH_URL } from "../services/api";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    );
    const [user, setUser] = useState(
        () => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null
    );
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)



    const Login = async (e) => {
        e.preventDefault();
        let headers = {
            'Content-Type': 'application/json'
        }
        let dataToSend = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const response = await axios.post(`${BASE_URL}${LOGIN_URL}`, dataToSend, { headers })
            .then(response => {
                console.log('data:', response.data);
                setAuthToken(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem('authTokens', JSON.stringify(response.data));
                navigate('/');
            })
            .catch(error => {
                console.error('erro:', error);
            })
    };

    const Logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authTokens');
    }

    const UpdateToken = async () => {
        let headers = {
            'Content-Type': 'application/json'
        }
        let dataToSend = {
            refresh: authToken?.refresh
        }

        const response = await axios.post(`${BASE_URL}${REFRESH_URL}`, dataToSend, { headers })
            .then(response => {
                setAuthToken(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem('authTokens', JSON.stringify(response.data));
            })
            .catch(error => {
                console.error('erro:', error);
                Logout();
            })
        if(loading){
            setLoading(false);
        }
    }

    const contextData = {
        user: user,
        Login: Login,
        Logout: Logout,
    };

    useEffect(() => {
        if(loading){
            UpdateToken();
        }
        let timeInterval = 1000 * 60 * 4;
        let interval = setInterval(() => {
            if (authToken) {
                UpdateToken();
            }
        }, timeInterval)
        return () => clearInterval(interval);
    }, [authToken, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export { useAuth };