// Shared/Component/LoadingSpinner.vue
<template>
  <div v-if="isLoading" id="progress-bar">
    <!-- Spinner o cualquier indicativo de carga -->
    <div class="spinner"></div>
  </div>
  <div v-else>
    <!-- Contenido de la aplicación que se muestra una vez la carga termine -->
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.isLoading = false; // Cambiar estado de carga a falso cuando se cargue
    });
  }
}
</script>

<style scoped>
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #e0e0e0;
  border-top: 5px solid #2d7e9f;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
