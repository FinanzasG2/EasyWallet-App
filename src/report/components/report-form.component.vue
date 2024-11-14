<script>
export default {
  name: "TableReportComponent",
  data() {
    return {
      rows: [
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          tcea: "4%",
          total: "S/. 2000.00"
        },
        {
          factura: "2111222",
          monto: "S/. 10.00",
          interes: "30%",
          emision: "10/09/2024",
          vencimiento: "23/09/2024",
          tcea: "4%",
          total: "S/. 2000.00"
        },
        // Agrega más filas según sea necesario
      ],
      tceaTotal: "20%"
    };
  },
  methods: {
    refreshData() {
      alert("Datos actualizados");
      // Aquí puedes actualizar los datos reales de la tabla en lugar de los datos de ejemplo
    },
    printRecord() {
      alert("Imprimir función llamada");
    },
    shareRecord() {
      alert("Compartir función llamada");
    },
    prevPage() {
      alert("Página anterior");
    },
    nextPage() {
      alert("Página siguiente");
    },
    calculateTCEA() {
      this.tceaTotal = "Resultado TCEA"; // Ajusta esto según sea necesario
    }
  }
};
</script>

<template>
  <main>
    <div class="report-header">
      <h2>VISUALIZACIÓN DE REPORTE</h2>
      <button class="refresh-button" @click="refreshData">
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
    <table>
      <thead>
      <tr>
        <th>N° de Factura</th>
        <th>Monto en S/. o $</th>
        <th>Tasa de Interés (%)</th>
        <th>Fecha de Emisión</th>
        <th>Fecha de Vencimiento</th>
        <th>TCEA Calculado</th>
        <th>Totales</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td>{{ row.factura }}</td>
        <td>{{ row.monto }}</td>
        <td>{{ row.interes }}</td>
        <td>{{ row.emision }}</td>
        <td>{{ row.vencimiento }}</td>
        <td>{{ row.tcea }}</td>
        <td>{{ row.total }}</td>
        <td>
          <button @click="printRecord">🖨️</button>
          <button @click="shareRecord">🔗</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button class="pagination-button" @click="prevPage">◀</button>
      <button class="pagination-button" @click="nextPage">▶</button>
    </div>
    <div class="calculate-section">
      <button id="calculate-button" @click="calculateTCEA">Calcular TCEA Total</button>
      <span id="tcea-total" class="result-text">{{ tceaTotal }}</span>
    </div>
    <div class="total-section">
      <span>Monto Total: <span id="total-amount">{{ tceaTotal }}</span></span>
    </div>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f9f9f9;
}

header {
  background-color: #2d7e9f;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin-left: 10px;
  font-size: 24px;
}

header nav button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  margin-left: 15px;
  cursor: pointer;
}

main {
  padding: 20px;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.report-header h2 {
  font-size: 24px;
  color: #3a3a3a;
}

.refresh-button {
  font-size: 16px;
  background-color: #2d7e9f;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 25px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

thead {
  background-color: #e0e0e0;
}

thead th {
  padding: 10px;
  text-align: left;
}

tbody td {
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

tbody tr {
  background-color: #fff;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

.pagination {
  text-align: center;
  margin-top: 10px;
}

.pagination-button {
  font-size: 18px;
  margin: 5px;
  cursor: pointer;
  background: none;
  border: none;
  color: #2d7e9f;
}

.calculate-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}

#calculate-button {
  background-color: #2d7e9f;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.result-text {
  font-size: 16px;
  color: #333;
}

.total-section {
  text-align: right;
  font-size: 16px;
  margin-top: 10px;
}
</style>
