<script>
export default {
  name: "TableReportComponent",
  data() {
    return {
      showReport: false,
      rows: [
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          fechadescuento: "10/09/2024",
          tcea: "4%",
        },
        // Agrega más filas aquí si es necesario para un total mayor a 10
      ],
      tceaTotal: "20%", // Ajusta según el cálculo deseado
      montoTotal: "S/. 200.00", // Ajusta según el cálculo deseado
    };
  },
  methods: {
    generarReporte() {
      this.showReport = true;
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
  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.2); /* Sombra más prominente en la parte superior */
  padding: 30px 20px; /* Aumenta el padding superior e inferior */
  margin-top: 20px;
  margin-bottom: 30px; /* Aumenta espacio en la parte inferior */
  width: 80%; /* Reduce el ancho del contenedor */
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
  border-top: 1px solid #e0e0e0; /* Línea superior para separar de la tabla */
}

.monto-total {
  text-align: right;
  font-weight: bold;
}
</style>