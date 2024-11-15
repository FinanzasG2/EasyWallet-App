<template>
  <div class="container">
    <table class="letters-table">
      <thead>
      <tr>
        <th>N° de Factura</th>
        <th>Monto</th>
        <th>Tasa del Periodo (%)</th>
        <th>Fecha de Emisión</th>
        <th>Fecha de Vencimiento</th>
        <th>Fecha de Descuento</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(letter, index) in letters" :key="index">
        <td>{{ letter.invoiceNumber }}</td>
        <td>{{ letter.amount }}</td>
        <td>{{ letter.interestRate }}</td>
        <td>{{ letter.issueDate }}</td>
        <td>{{ letter.dueDate }}</td>
        <td>{{ letter.discountDate }}</td>
        <td>
          <button class="edit-button">&#9998;</button>
          <button class="delete-button">&#128465;</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "letter-list-component",
  data() {
    return {
      letters: [
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },
        {
          invoiceNumber: "2111222",
          amount: "S/. 10.00",
          interestRate: "30%",
          issueDate: "10/09/2024",
          dueDate: "23/09/2024",
          discountDate:"14/09/2024"
        },

      ],
    };
  },
};
</script>

<style scoped>

.container {
  font-family: Arial, sans-serif;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  max-height: 500px;
  overflow-y: auto;
  margin-top: 50px;
}


tbody tr:hover {
  background-color: #f1f1f1;
}

.letters-table {
  width: 70%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.letters-table th,
.letters-table td {
  border: white;
  padding: 12px;
  text-align: center;
}

.letters-table th {
  background-color: #e0e0e0;
}

.edit-button,
.delete-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.edit-button {
  color: #4a94a7;
}

.delete-button {
  color: #cc0000;
}
</style>
