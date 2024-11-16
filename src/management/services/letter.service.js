// src/management/services/letter.service.js
import axios from "axios";
import { letterBaseUrl, usersBaseUrl } from "@/apiConfig.js";

// Crear una instancia preconfigurada de axios
const http = axios.create({
    baseURL: letterBaseUrl,
});

export class LetterService {
    // Método para registrar una nueva letra

    registerLetter(requestData) {
        console.log("URL final utilizada:", http.defaults.baseURL);

        return http.post("", requestData)
            .then(response => response.data)
            .catch(error => {
                let errorMessage = 'Error al registrar la letra';
                if (error.response) {
                    errorMessage += `: ${error.response.status} - ${error.response.data.message || error.response.statusText}`;
                } else if (error.request) {
                    errorMessage += ': No se recibió respuesta del servidor';
                } else {
                    errorMessage += `: ${error.message}`;
                }
                throw new Error(errorMessage);
            });
    }

    // Metodo para obtener lista de letras por id de usuario
    getByUserId(userId) {
        return http.get(`/usuario/${userId}`)
            .then(response => response.data)
            .catch(error => {
                let errorMessage = 'Error al obtener las letras por usuario';
                if (error.response) {
                    errorMessage += `: ${error.response.status} - ${error.response.data.message || error.response.statusText}`;
                } else if (error.request) {
                    errorMessage += ': No se recibió respuesta del servidor';
                } else {
                    errorMessage += `: ${error.message}`;
                }
                throw new Error(errorMessage);
            });
    }

}

// Exporta una instancia de la clase para uso en toda la aplicación
export default new LetterService();