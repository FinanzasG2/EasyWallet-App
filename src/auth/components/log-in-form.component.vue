<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-header">EasyWallet</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input
              type="text"
              v-model="username"
              placeholder="Usuario o correo electrónico"
              class="form-input"
          />
        </div>

        <div class="form-group">
          <input
              type="password"
              v-model="password"
              placeholder="Contraseña"
              class="form-input"
          />
        </div>

        <button type="submit" class="btn-primary">Iniciar Sesión</button>
      </form>
      <p class="register-text">
        ¿No tienes una cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      alert('Formulario enviado');
    },
  },
};
</script>

<style scoped>
/* Estilos para centrar el formulario y darle fondo */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../../../src/assets/background.png');
  background-size: cover;
  background-position: center;
}

/* Estilos de la tarjeta del formulario */
.login-card {
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semi-transparente */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

/* Encabezado */
.login-header {
  font-size: 2rem;
  font-weight: bold;
  color: #2d7e9f;
  margin-bottom: 1.5rem;
}

/* Estilos de los campos de formulario */
.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}

/* Botón de inicio de sesión */
.btn-primary {
  background-color: #2d7e9f;
  color: #ffffff;
  border: none;
  padding: 0.8rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #236581;
}

/* Texto de registro */
.register-text {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-text a {
  color: #2d7e9f;
  text-decoration: none;
}

.register-text a:hover {
  text-decoration: underline;
}
</style>
