<script>
import Navbar from "@/shared/component/nav.component.vue";
import LoadingSpinner from "@/shared/component/loader.vue";
export default {
  components: {
    Navbar,
    LoadingSpinner,
  },
  data() {
    return {
      isLoading: true, // Se puede inicializar en true si quieres que cargue al principio
    };
  },
  created() {
    // Agregar hooks al router para mostrar el loader durante la navegación
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true; // Mostrar el loader antes de cambiar de ruta
      next(); // Continuar con la navegación
    });

    this.$router.afterEach(() => {
      // Ocultar el loader después de que la navegación ha terminado
      setTimeout(() => {
        this.isLoading = false;
      }, 500); // Puedes ajustar el tiempo si deseas que el loader esté visible por un momento
    });
  },
  mounted() {
    // Simular un proceso de carga inicial para ocultar el loader después de la carga inicial
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

}
</script>

<template>
  <pv-toast />
  <Navbar />
  <LoadingSpinner v-if="isLoading" :loading="isLoading" />
  <div v-else>

  <div class="component-container">
    <RouterView />
  </div>
  </div>


</template>



<style>
body{
  margin: 0;
}
</style>
