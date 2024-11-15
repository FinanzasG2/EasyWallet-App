<template>
  <div class="card">
    <h2 class="card-header">Registro de Letras</h2>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label class=form-label for="factura">N° de Factura</label>
          <input type="text" v-model="factura" id="factura" class="form-input" />
        </div>

        <div class="form-group">
          <label class=form-label for="monto">Monto en Soles o Dólares</label>
          <input type="text" v-model="monto" id="monto" class="form-input" />
        </div>

        <div class="form-group">
          <label class=form-label for="tipoTasa">Tipo de Tasa</label>
          <select v-model="tipoTasa" @change="mostrarCapitalizacion" id="tipoTasa" class="form-input">
            <option value="">Seleccione Tipo de Tasa</option>
            <option value="nominal">Tasa Nominal</option>
            <option value="efectiva">Tasa Efectiva</option>
          </select>
        </div>

        <div v-if="tipoTasa === 'nominal'" class="form-group">
          <label class=form-label for="capitalizacion">Capitalización</label>
          <select v-model="capitalizacion" id="capitalizacion" class="form-input">
            <option value="">Seleccione Capitalización</option>
            <option value="diaria">Diaria</option>
            <option value="mensual">Mensual</option>
            <option value="anual">Anual</option>
          </select>
        </div>

        <div class="form-group">
          <label class=form-label for="tasaInteres">Tasa de Interés (%)</label>
          <input type="number" v-model="tasaInteres" id="tasaInteres" class="form-input" />
        </div>

        <button type="button" @click="toggleCostos" class="btn">
          Agregar Costos Adicionales
        </button>

        <div v-if="mostrarCostos" class="costos-section">
          <h3 class="costos-title">Detalles del Costo Adicional</h3>
          <div class="form-group">
            <label class=form-label for="tiempoCosto">Tiempo del Costo</label>
            <input type="date" v-model="tiempoCosto" id="tiempoCosto" class="form-input" />
          </div>

          <div class="form-group">
            <label class=form-label for="descripcionCosto">Descripción del Costo</label>
            <input type="text" v-model="descripcionCosto" id="descripcionCosto" class="form-input" />
          </div>

          <div class="form-group">
            <label class=form-label for="montoCosto">Monto del Costo</label>
            <input type="number" v-model="montoCosto" id="montoCosto" class="form-input" />
          </div>
        </div>



        <button type="submit" class="btn-primary">Registrar Letra</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      factura: '',
      monto: '',
      tipoTasa: '',
      capitalizacion: '',
      tasaInteres: '',
      mostrarCostos: false,
      tiempoCosto: '',
      descripcionCosto: '',
      montoCosto: '',

    };
  },
  methods: {
    toggleCostos() {
      this.mostrarCostos = !this.mostrarCostos;
    },
    mostrarCapitalizacion() {
      if (this.tipoTasa !== 'nominal') {
        this.capitalizacion = '';
      }
    },
    submitForm() {
      alert('Formulario enviado');
    },
  },
};
</script>

<style scoped>
/* Estilos generales de la tarjeta */
.card {
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
}

/* Encabezado de la tarjeta */
.card-header {
  font-size: 2rem;
  font-weight: bold;
  color: #2d7e9f;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Cuerpo de la tarjeta */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Estilos de los campos de formulario */
.form-group {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.form-label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.4rem;
}

.form-input {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.1rem;
}

/* Botones */
.btn,
.btn-primary {
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn {
  background-color: #2d7e9f;
  color: #ffffff;
  border: none;
  margin-top: 1rem;
}

.btn:hover {
  background-color: #236581;
}

.btn-primary {
  background-color: #2d7e9f;
  color: #ffffff;
  border: none;
  width: 100%;
  margin-top: 1.5rem;
}

.btn-primary:hover {
  background-color: #236581;
}

/* Sección de costos adicionales */
.costos-section {
  padding: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f0f8fa;
  margin-top: 1.2rem;
}

.costos-title {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
}
</style>
