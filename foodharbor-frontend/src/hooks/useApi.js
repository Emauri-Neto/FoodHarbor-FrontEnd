import axios from "axios";
import { useAuth } from "../context/AuthContext"
import { BASE_URL, FOODHARBOR_URL } from "../services/api"

const useApi = () => {
    let { UpdateToken } = useAuth();

    const api = axios.create({
        baseURL: `${BASE_URL}${FOODHARBOR_URL}`,
        timeout: 1000,
        headers: {
            "Content-Type": "application/json",
        }
    })

    api.interceptors.request.use(async (req) => {
        const auth = await UpdateToken();
        req.headers.Authorization = `Bearer ${auth}`;
        return req;
    }, (err) => {
        console.error("interceptor:", err);
    }
    );

    return api;
};

export default useApi;