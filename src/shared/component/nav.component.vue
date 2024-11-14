<script>
export default {
  name: "navbar",
}
</script>

<template>
  <pv-toolbar class="toolbarstyle">
    <template #start>
      <div class="toolbar" >
        <div class="logo">EasyWallet</div>
        <div class="nav-buttons">
          <!-- Enlace a la página de registro de letras -->
          <router-link to="/register-letter" class="nav-button">Registra tu Letra</router-link>

          <!-- Enlace a la página de reportes -->
          <router-link to="/letter-list" class="nav-button">Listado de Letras</router-link>

          <!-- Enlace para Cartera (puedes agregar esta ruta en el enrutador si aún no está definida) -->
          <router-link to="/report-page" class="nav-button">Cartera</router-link>

          <!-- Botón de cierre de sesión (si es solo un botón sin navegación) -->
          <button class="logout-button">&#10140</button>
        </div>
      </div>
    </template>
  </pv-toolbar>

</template>

<style scoped>

/* Sobrescribe el borde y el fondo del Toolbar de PrimeVue */


/* Ajuste del body y html para eliminar espacios en blanco */
.toolbarstyle{
  padding: 0;
  margin: 0;
  border: none;
}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Evita el desbordamiento horizontal */
}

/* Ajustes para la barra de navegación */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2d7e9f; /* Fondo azul */
  padding: 20px;
  color: white; /* Texto en blanco */
  width: 100vw; /* Ocupa todo el ancho de la ventana */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
  margin: 0; /* Elimina cualquier margen del contenedor */
}

/* Logo */
.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
}

/* Contenedor de los botones de navegación */
.nav-buttons {
  display: flex;
  gap: 2rem;
}

/* Estilos para los enlaces de navegación */
.nav-button {
  font-size: 1.1rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.5s, background-color 0.5s;
  padding: 8px 16px;
}

.nav-button:hover {
  color: #2d7e9f;
  background-color: white;
  border-radius: 5px;
}

/* Botón de logout */
.logout-button {
  font-size: 1.1rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.3s, background-color 0.3s;
}

.logout-button:hover {
  color: #2d7e9f;
  background-color: white;
  border-radius:5px;
}
</style>