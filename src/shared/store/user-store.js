// src/stores/userStore.js

import { defineStore } from 'pinia';

export const useUserStore = defineStore('auth', {
    state: () => ({
        user = null,
        token = null,
    }),

    actions: {
        // Acción para establecer los datos del usuario
        login(data) {
            if (!data.user) {
                return;
            }
            this.user = data.user;
            this.token = data.token;

            // Guardar los datos en localStorage para persistencia
            localStorage.setItem('auth', JSON.stringify(data));
        },
        logout() {
        localStorage.removeItem('auth');
        this.user = null;
        this.token = null;
        }
    }

});
