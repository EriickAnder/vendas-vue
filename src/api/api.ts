import axios from 'axios';
import { useAuthStore } from '../store/auth';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'accept': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        const { token } = authStore;
        console.log('Token:', authStore.token);
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
