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
          <label class=form-label for="tipo-moneda">Tipo de Moneda</label>
          <select v-model="tipoMoneda" id="tipo-moneda" class="form-input">
            <option value="">Seleccione Tipo de Moneda</option>
            <option value="S/.">Soles</option>
            <option value="$">Dolares</option>
          </select>
          <br/>
          <label class=form-label for="monto">Monto</label>
          <input type="number" v-model="monto" id="monto" class="form-input" />
        </div>
        <div class="form-group">
          <label class=form-label for="fecha_vencimiento">Fecha de Vencimiento</label>
          <input type="date" v-model="fecha_vencimiento" id="fecha_vencimiento" class="form-input" />
          <br/>
          <label class=form-label for="fecha_descuento">Fecha de Descuento</label>
          <input type="date" v-model="fecha_descuento" id="fecha_descuento" class="form-input" />
          <div v-if="fechaError" class="error-message">La fecha de descuento no puede ser mayor a la fecha de vencimiento.</div>
        </div>
        <div class="form-group">
          <label class=form-label for="tipoTasa">Tipo de Tasa</label>
          <select v-model="tipoTasa" @change="mostrarCapitalizacion" id="tipoTasa" class="form-input">
            <option value="">Seleccione Tipo de Tasa</option>
            <option value="NOMINAL">Tasa Nominal</option>
            <option value="EFECTIVA">Tasa Efectiva</option>
          </select>
        </div>
        <div  class="form-group">
          <label class=form-label for="tiempo-tasa">Tiempo Tasa</label>
          <select v-model="tiempotasa" id="selector-tiempo-tasa" class="form-input">
            <option value="">Seleccione Tiempo de Tasa</option>
            <option value="DIARIA">Diaria</option>
            <option value="QUINCENAL">Quincenal</option>
            <option value="MENSUAL">Mensual</option>
            <option value="BIMESTRAL">Bimestral</option>
            <option value="TRIMESTRAL">Trimestral</option>
            <option value="CUATRIMESTRAL">Cuatrimestral</option>
            <option value="SEMESTRAL">Semestral</option>
            <option value="ANUAL">Anual</option>
          </select>
        </div>
        <div v-if="tipoTasa === 'NOMINAL'" class="form-group">
          <label class=form-label for="capitalizacion">Capitalización</label>
          <select v-model="capitalizacion" id="capitalizacion" class="form-input">
            <option value="">Seleccione Capitalización</option>
            <option value="DIARIA">Diaria</option>
            <option value="QUINCENAL">Quincenal</option>
            <option value="MENSUAL">Mensual</option>
            <option value="BIMESTRAL">Bimestral</option>
            <option value="TRIMESTRAL">Trimestral</option>
            <option value="CUATRIMESTRAL">Cuatrimestral</option>
            <option value="SEMESTRAL">Semestral</option>
            <option value="ANUAL">Anual</option>
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
            <select v-model="tiempoCosto" id="selector-tiempo-costo" class="form-input">
              <option value="">Seleccione Tiempo del Costo</option>
              <option value="INICIO">Inicio</option>
              <option value="VENCIMIENTO">Vencimiento</option>

            </select>
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
import LetterService from "@/management/services/letter.service.js";
import { jwtDecode } from "jwt-decode";

export default {
  data() {
    return {
      factura: '',
      tipoMoneda: '',
      monto: '',
      fecha_vencimiento: '',
      fecha_descuento: '',
      tipoTasa: '',
      tiempotasa: '',
      capitalizacion: '',
      tasaInteres: '',
      mostrarCostos: false,
      tiempoCosto: '',
      descripcionCosto: '',
      montoCosto: '',
      usuarioId: null, // Aquí almacenaremos el ID del usuario
    };
  },
  created() {
    this.loadUserId();
  },
  methods: {
    toggleCostos() {
      this.mostrarCostos = !this.mostrarCostos;
    },
    mostrarCapitalizacion() {
      if (this.tipoTasa !== 'NOMINAL') {
        this.capitalizacion = '';
      }
    },
    loadUserId() {
      const token = localStorage.getItem("user"); // Cambia "user" por la clave correcta en localStorage
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          this.usuarioId = parseInt(decodedToken.sub, 10); // Decodificar y convertir a número
          if (isNaN(this.usuarioId)) {
            throw new Error("El ID del usuario no es un número válido.");
          }
        } catch (error) {
          console.error("Error al decodificar el token:", error);
          alert("Sesión inválida. Por favor, vuelve a iniciar sesión.");
        }
      } else {
        alert("No se encontró el token. Por favor, inicia sesión.");
      }
    },
    formatDateToISOString(date) {
      const formattedDate = new Date(date).toISOString();
      return formattedDate.slice(0, -5) + "Z"; // Remueve los milisegundos y conserva el formato esperado
    },
    async submitForm() {
      const fechaRegistro = this.formatDateToISOString(new Date()); // Formatear fecha actual
      const requestData = {
        usuarioId: this.usuarioId,
        letterNumber: this.factura,
        valorNominal: parseFloat(this.monto),
        fechaRegistro,
        fechaVencimiento: this.formatDateToISOString(this.fecha_vencimiento), // Formatear fecha de vencimiento
        fechaDescuento: this.formatDateToISOString(this.fecha_descuento), // Formatear fecha de descuento
        currency: this.tipoMoneda,
        valorTasa: parseFloat(this.tasaInteres),
        tipoTasa: this.tipoTasa.toUpperCase(),
        frecuenciaTasa: this.tiempotasa.toUpperCase(),
        capitalizacionTasa: this.capitalizacion.toUpperCase(),
        costosAdicionales: this.mostrarCostos
            ? [
              {
                descripcion: this.descripcionCosto,
                monto: parseFloat(this.montoCosto),
                tiempo: this.tiempoCosto || 'INICIO',
              },
            ]
            : [],
      };

      console.log('Datos del formulario:', requestData);

      try {
        const response = await LetterService.registerLetter(requestData);
        alert("Registro de letra exitoso");
        console.log("Respuesta del servidor:", response);
      } catch (error) {
        console.error("Error al registrar la letra:", error.message);
        alert("Error al registrar la letra: " + error.message);
      }
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