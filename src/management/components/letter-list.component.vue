<template>
  <div class="container">
    <table class="letters-table">
      <thead>
      <tr>
        <th>N° de Letra</th>
        <th>Valor Nominal</th>
        <th>Tasa (%)</th>
        <th>Fecha de Registro</th>
        <th>Fecha de Vencimiento</th>
        <th>Fecha de Descuento</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(letter, index) in letters" :key="index">
        <td>{{ letter.letterNumber }}</td>
        <td>{{ letter.valorNominal }}</td>
        <td>{{ letter.tasa.valor }}</td>
        <td>{{ formatDate(letter.fechaRegistro) }}</td>
        <td>{{ formatDate(letter.fechaVencimiento) }}</td>
        <td>{{ formatDate(letter.fechaDescuento) }}</td>
        <td>
          <button class ="btn-icon" @click="deleteLetter(parseInt(letter.id,10))"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LetterService from "@/management/services/letter.service";
import {jwtDecode} from "jwt-decode";

export default {
  name: "letter-list-component",
  data() {
    return {
      letters: [], // Lista de letras
    };
  },
  created() {
    this.fetchLetters();
  },
  methods: {
    async fetchLetters() {
      try {
        const token = localStorage.getItem("user");
        if (token) {
          try {
            const decodedToken = jwtDecode(token);
            const userId = parseInt(decodedToken.sub, 10); // Decodificar y convertir a número
            if (isNaN(userId)) {
              throw new Error("El ID del usuario no es un número válido.");
            }
            // Llamar al servicio para obtener las letras por userId
            this.letters = await LetterService.getByUserId(userId);
          } catch (error) {
            console.error("Error al decodificar el token:", error);
            alert("Sesión inválida. Por favor, vuelve a iniciar sesión.");
          }
        } else {
          alert("No se encontró el token. Por favor, inicia sesión.");
        }

      } catch (error) {
        console.error("Error al obtener las letras:", error.message);
        alert("Error al cargar las letras: " + error.message);
      }
    },
    formatDate(dateString) {
      // Dar formato a las fechas (opcional)
      const options = {year: "numeric", month: "2-digit", day: "2-digit"};
      return new Date(dateString).toLocaleDateString("es-PE", options);
    },
    async deleteLetter(letterId) {
      console.log("Intentando eliminar la letra con ID:", letterId);
      const confirmDelete = confirm("¿Estás seguro de que deseas eliminar esta letra?");
      if (confirmDelete) {
        try {
          await LetterService.deleteLetter(letterId);
          this.letters = this.letters.filter(letter => letter.id !== letterId);
          alert("Letra eliminada con éxito.");
        } catch (error) {
          console.error("Error al eliminar la letra:", error.message);
          alert("No se pudo eliminar la letra: " + error.message);
        }
      }
    }
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
/* Botón base */
.btn-icon {
  font-size: 18px; /* Tamaño del ícono */
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px; /* Espaciado interno */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%; /* Hace que el fondo circular aparezca de forma uniforme */
}


/* Hover: fondo circular rojo y color del ícono blanco */
.btn-icon:hover {
  background-color: #f44336; /* Fondo rojo */
  color: #fff; /* Ícono en blanco */
  transform: scale(1.1); /* Agranda ligeramente el ícono */
}


</style>
