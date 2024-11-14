<script>
export default {
  name: "navbar",
}
</script>

<template>
  <pv-toolbar>
    <template #start>
      <div class="toolbar">
        <div class="logo">EasyWallet</div>
        <div class="nav-buttons">
          <!-- Enlace a la página de registro de letras -->
          <router-link to="/register-letter" class="nav-button">Registra tu Letra</router-link>

          <!-- Enlace a la página de reportes -->
          <router-link to="/report-page" class="nav-button">Listado de Letras</router-link>

          <!-- Enlace para Cartera (puedes agregar esta ruta en el enrutador si aún no está definida) -->
          <router-link to="/portfolio" class="nav-button">Cartera</router-link>

          <!-- Botón de cierre de sesión (si es solo un botón sin navegación) -->
          <button class="logout-button">⤴️</button>
        </div>
      </div>
    </template>
  </pv-toolbar>

</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #39869E;
  padding: 10px 20px;
  color: #fff;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 10px;
}

.nav-button,
.logout-button {
  background-color: #fff;
  color: #39869E;
  border: 2px solid #39869E;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.nav-button:hover,
.logout-button:hover {
  background-color: #39869E;
  color: #fff;
}

.logout-button {
  border-radius: 50%;
}
</style>