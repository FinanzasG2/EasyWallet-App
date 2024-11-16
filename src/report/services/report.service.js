// src/management/services/letter.service.js
import axios from "axios";
import {letterBaseUrl, reportsBaseUrl, tceaBaseUrl, usersBaseUrl} from "@/apiConfig.js";

// Crear una instancia preconfigurada de axios
const letterhttp = axios.create({
    baseURL: letterBaseUrl,
});

const tceaHttp = axios.create({
    baseURL: tceaBaseUrl,
});

const reportHttp = axios.create({
    baseURL: reportsBaseUrl,
});

export class ReportService {

    getByUserId(userId) {
        return letterhttp.get(`/usuario/${userId}`)
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
    // Obtener TCEA por ID de letra
    getTceaById(letterId) {
        return tceaHttp.get(`/letter/${letterId}`)
            .then(response => response.data)
            .catch(error => {
                let errorMessage = 'Error al obtener el TCEA de la letra';
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

    // Obtener reporte general
    getReportByUserId(userId) {
        return reportHttp.get(`/usuario/${userId}`)
            .then(response => response.data)
            .catch(error => {
                let errorMessage = 'Error al obtener el reporte';
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
