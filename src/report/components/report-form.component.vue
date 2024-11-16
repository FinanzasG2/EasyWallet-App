<script>
import { ReportService } from "@/report/services/report.service.js";
import {jwtDecode} from "jwt-decode";

export default {
  name: "TableReportComponent",
  data() {
    return {
      showReport: false,
      rows: [], // Datos de las letras, inicializado como vacío
      tceaTotal: "", // Dato dinámico
      montoTotal: "", // Dato dinámico
      fechaReporte: "N/A", // Nueva variable para la fecha del reporte
    };
  },
  created() {
    this.fetchLetters(); // Carga las letras al iniciar el componente
    this.generarReporte();

  },
  methods: {
    async fetchLetters() {
      const token = localStorage.getItem("user");

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = parseInt(decodedToken.sub, 10); // Decodificar y convertir a número
          if (isNaN(userId)) {
            throw new Error("El ID del usuario no es un número válido.");
          }
          const letters = await reportService.getByUserId(userId);

          // Mapear los datos para llenar la tabla
          this.rows = letters.map(letter => ({
            id: letter.id, // Necesitamos el ID para luego obtener el TCEA
            factura: letter.letterNumber || "N/A",
            monto: letter.valorNominal ? `${letter.currency} ${Number(letter.valorNominal).toFixed(2)}` : `${letter.currency} 0.00`,
            interes: letter.tasa?.valor ? `${Number(letter.tasa.valor).toFixed(2)}%` : "0%",
            emision: letter.fechaRegistro ? new Date(letter.fechaRegistro).toLocaleDateString("es-PE") : "N/A",
            vencimiento: letter.fechaVencimiento ? new Date(letter.fechaVencimiento).toLocaleDateString("es-PE") : "N/A",
            fechadescuento: letter.fechaDescuento ? new Date(letter.fechaDescuento).toLocaleDateString("es-PE") : "N/A",
            tcea: "Calculando...", // Placeholder mientras se obtiene el valor
          }));
          // Llamar al servicio para obtener las letras por userId

        } catch (error) {
          console.error("Error al decodificar el token:", error);
          alert("Sesión inválida. Por favor, vuelve a iniciar sesión.");
        }
      } else {
        alert("No se encontró el token. Por favor, inicia sesión.");
      }


      const reportService = new ReportService();


      try {
        // Obtener letras del usuario

      } catch (error) {
        console.error("Error al obtener las letras:", error.message);
        alert("Error al cargar las letras: " + error.message);
      }
    },
    async generarReporte() {
      // Mostrar la tarjeta del reporte
      this.showReport = true;

      // Llamamos al servicio para obtener el TCEA para cada letra
      const reportService = new ReportService();

      // Iterar sobre cada letra y obtener su TCEA
      for (let i = 0; i < this.rows.length; i++) {
        const letra = this.rows[i];
        try {
          const tceaResponse = await reportService.getTceaById(letra.id);
          // Asumiendo que la respuesta tiene un campo 'tcea', lo asignamos a la fila correspondiente
          this.rows[i].tcea = tceaResponse.tcea ? `${Number(tceaResponse.tcea).toFixed(2)}%` : "0%";
        } catch (error) {
          console.error(`Error al obtener el TCEA para la letra con ID ${letra.id}:`, error.message);
          // Mostrar mensaje de error en la columna TCEA correspondiente
          this.rows[i].tcea = "Error al calcular";
        }
      }
    },
  },
};
</script>

<template>
  <main>
    <!-- Botón para generar reporte, siempre visible -->
    <button @click="generarReporte" class="generate-report-button">
      Generar Reporte
    </button>

    <!-- Card que contiene la tabla y los resultados, visible después de hacer clic en "Generar Reporte" -->
    <div v-if="showReport" class="card-container">
      <!-- Tabla de reportes -->
      <div class="table-container">
        <table>
          <thead>
          <tr>
            <th>N° de Factura</th>
            <th>Monto</th>
            <th>TP (%)</th>
            <th>Fecha de Emisión</th>
            <th>Fecha de Vencimiento</th>
            <th>Fecha de Descuento</th>
            <th>TCEA Calculado</th>
            <th>Acciones</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(row, index) in rows.slice(0, 10)" :key="index">
            <td>{{ row.factura }}</td>
            <td>{{ row.monto }}</td>
            <td>{{ row.interes }}</td>
            <td>{{ row.emision }}</td>
            <td>{{ row.vencimiento }}</td>
            <td>{{ row.fechadescuento }}</td>
            <td>{{ row.tcea }}</td>
            <td>
              <button @click="printRecord">🖨️</button>
              <button @click="shareRecord">🔗</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- Sección de resultados finales -->
      <div class="total-section">
        <span>TCEA Total: <span id="tcea-total">{{ tceaTotal }}</span></span>
        <span class="monto-total">Monto Total: <span id="total-amount">{{ montoTotal }}</span></span>
        <span>Fecha Reporte: <span id="fecha-reporte">{{ fechaReporte }}</span></span>
      </div>
    </div>
  </main>
</template>


<style scoped>
/* Estilo para el botón "Generar Reporte" */
.generate-report-button {
  font-size: 16px;
  background-color: #2d7e9f;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 47%;
}

/* Contenedor tipo "card" ajustado para un ancho reducido y mayor sombra */
.card-container {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

/* Limitar altura del contenedor de la tabla para mostrar solo 10 filas y permitir desplazamiento vertical */
.table-container {
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

thead {
  background-color: #e0e0e0;
  text-align: left;
}

thead th,
tbody td {
  padding: 12px;
  text-align: left;
  color: #3a3a3a;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

/* Estilo para los resultados con TCEA a la izquierda y Monto a la derecha */
.total-section {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #333;
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
}

.monto-total {
  text-align: right;
  font-weight: bold;
}
</style>