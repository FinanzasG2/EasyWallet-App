<script>
export default {
  name: "navbar",
}
</script>

<template>
  <div class="logo">EasyWallet</div>
  <nav>
    <button class="nav-button">Registra tu Letra</button>
    <button class="nav-button">Listado de Letras</button>
    <button class="nav-button">Cartera</button>
    <button class="logout-button">⤴️</button>
  </nav>
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