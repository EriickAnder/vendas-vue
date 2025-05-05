
import { defineStore } from 'pinia';
import { login, logout } from '../services/authService';
import { LoginResponse } from '../interfaces/Auth';
import { User } from '../interfaces/User';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as User | null,
    }),
    actions: {

        async setAuth() {
            try {
                const data: LoginResponse = await login();
                console.log('Login response:', data);
                this.token = data.token;
                this.user = data.user;
            } catch (error) {
                console.error('Erro de login:', error);
            }
        },


        logout() {
            this.token = null;
            this.user = null;
            logout();
        },
    },
    persist: true,
});
