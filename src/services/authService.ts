
import api from '../api/api';
import { LoginResponse } from '../interfaces/Auth';


export async function login(): Promise<LoginResponse> {

    // Normalmente criaria env para dados sensiveis, mas como é um teste, vou deixar fixo
    const email: string = 'alia.predovic@example.net';
    const password: string = '123456';
    const response = await api.post('/login', { email, password });
    return response.data;
}

export function logout() {

    localStorage.removeItem('token');
}
