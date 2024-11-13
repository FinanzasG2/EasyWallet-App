<script>

export default {
  name: "letter-creation-form",
  data() {
    return {
      form: {
        factura: '',
        monto: '',
        tipoTasa: '',
        tasaInteres: '',
        capitalizacion: '',
        fechaEmision: '',
        fechaVencimiento: '',
        fechaDescuento: '',
        observaciones: '',
        costosAdicionales: [
          { descripcion: '', monto: '', tiempo: 'INICIO' },
        ],
      },
      mostrarCostosAdicionales: false,
    };
  },
  methods: {
    handleTasaChange() {
      if (this.form.tipoTasa === 'Tasa Efectiva') {
        this.form.capitalizacion = '';
      }
    },
    toggleCostosAdicionales() {
      this.mostrarCostosAdicionales = !this.mostrarCostosAdicionales;
    },

  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <!-- Grupo de N° de Factura y Monto -->
    <div class="form-group">
      <input type="text" placeholder="N° de Factura" v-model="form.factura" />
      <input type="text" placeholder="Monto en Soles o Dólares" v-model="form.monto" />
    </div>

    <!-- Grupo de Tipo de Tasa y Tasa de Interés -->
    <div class="form-group">
      <select v-model="form.tipoTasa" @change="handleTasaChange">
        <option disabled value="">Tipo de Tasa</option>
        <option>Tasa Efectiva</option>
        <option>Tasa Nominal</option>
      </select>
      <input
          type="text"
          placeholder="Tasa de Interés (%)"
          v-model="form.tasaInteres"
          :readonly="form.tipoTasa === 'Tasa Efectiva'"
      />
    </div>

    <!-- Grupo de Capitalización y Botón de Costos Adicionales -->
    <div class="form-group align-items">
      <div v-if="form.tipoTasa === 'Tasa Nominal'" class="capitalizacion-container">
        <select v-model="form.capitalizacion">
          <option disabled value="">Seleccione Capitalización</option>
          <option value="diaria">Diaria</option>
          <option value="semestral">Semestral</option>
          <option value="anual">Anual</option>
        </select>
      </div>
      <button type="button" class="btn_costos_adicionales" @click="toggleCostosAdicionales">
        Agregar Costos Adicionales
      </button>
    </div>

    <!-- Campos adicionales para agregar costos -->
    <div v-if="mostrarCostosAdicionales" class="form-group form-costos">
      <div class="form-field">
        <label for="tiempo-costo">Tiempo del Costo</label>
        <select id="1" v-model="form.costosAdicionales[0].tiempo">
          <option disabled value="">Seleccione Tiempo del Costo</option> <!-- Usar una cadena vacía -->
          <option value="Al Inicio">Al Inicio</option>
          <option value="Al Vencimiento">Al Vencimiento</option>
        </select>
      </div>
      <div class="form-field">
        <label for="descripcion-costo">Descripción del Costo</label>
        <input
            type="text"
            id="descripcion-costo"
            placeholder="Descripción"
            v-model="form.costosAdicionales[0].descripcion"
        />
      </div>
      <div class="form-field">
        <label for="monto-costo">Monto del Costo</label>
        <input
            type="text"
            id="monto-costo"
            placeholder="Monto"
            v-model="form.costosAdicionales[0].monto"
        />
      </div>
    </div>

    <!-- Grupo de Fechas -->
    <div class="form-group">
      <input type="date" placeholder="Fecha de Emisión" v-model="form.fechaEmision" />
      <input type="date" placeholder="Fecha de Vencimiento" v-model="form.fechaVencimiento" />
      <input type="date" placeholder="Fecha de Descuento" v-model="form.fechaDescuento" />
    </div>

    <!-- Observaciones -->
    <textarea placeholder="Observaciones adicionales" v-model="form.observaciones"></textarea>

    <!-- Botón de Envío -->
    <button type="submit" class="submit-button">Registrar Letra</button>
  </form>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #39869E;
  padding: 10px 20px;
  color: #fff;
}



nav {
  display: flex;
  gap: 10px;
}


main {
  padding: 40px;
  text-align: center;
}

h1 {
  color: #39869E;
}



.form-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

input, select, textarea {
  width: 48%;
  padding: 10px;
  border: 1px solid #39869E;
  border-radius: 5px;
  font-size: 16px;
}

textarea {
  width: 100%;
  height: 100px;
}

.submit-button {
  background-color: #39869E;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: #317c8b;
}

.btn_costos_adicionales {
  background-color: #39869E;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.btn_costos_adicionales:hover {
  background-color: #317c8b;
}

/* Ajusta la distribución de los campos de Costos Adicionales */
.form-costos {
  display: flex;
  justify-content: space-between;
  gap: 10px; /* Espacio entre los campos */
  margin-bottom: 20px;
  flex-wrap: nowrap; /* Evita que los elementos se vayan a la siguiente línea */
}

.form-field {
  display: flex;
  flex-direction: column;
  width: 32%; /* Ajusta el ancho de cada campo para que ocupen la misma fila */
  margin-bottom: 0; /* Evita espacio adicional debajo de los campos */
}

.form-field select,
.form-field input {
  width: 100%;
}

/* Ajuste del select de Capitalización */
.capitalizacion-container select {
  width: 100%; /* Ocupa todo el ancho disponible */
  margin-right: 10px;
}

/* Alinea los campos debajo de los títulos */
.form-costos label {
  text-align: left;
  margin-bottom: 5px;
}
</style>