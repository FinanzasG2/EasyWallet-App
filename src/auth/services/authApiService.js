import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/auth/';

export class AuthApiService {

    // Función de inicio de sesión
    async login(email, password) {
        try {
            const response = await axios.post(API_URL + 'login', {
                email,
                password,
            });

            // Si el login es exitoso, almacenamos el token en localStorage
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            console.error("Error en la autenticación:", error);
            throw error;
        }
    }

    // Función de registro
    async register(name, username, email, password) {
        try {
            const response = await axios.post(API_URL + 'register', {
                name,
                username,
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return response.data;
        } catch (error) {
            console.error("Error en el registro:", error);
            throw error;
        }
    }

    // Función de cierre de sesión
    logout() {
        localStorage.removeItem('user'); // Elimina el token almacenado
    }

    // Función para obtener el usuario autenticado actual
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user')); // Retorna la información del usuario almacenada
    }
}

// Exporta una instancia de la clase para uso en toda la aplicación
export default new AuthApiService();
