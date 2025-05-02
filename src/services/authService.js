import api from '../api/api';
import { useAuthStore } from '../store/auth';

export async function login() {
    const email = 'alia.predovic@example.net';
    const password = '123456';
    const response = await api.post('/login', { email, password });
    const authStore = useAuthStore();
    authStore.setAuth(response.data);
    return response.data;
}
