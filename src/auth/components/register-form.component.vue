<template>
  <div class="register-container">
    <div class="register-card">
      <h2 class="register-header">EasyWallet</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input
              type="text"
              v-model="firstName"
              placeholder="Nombre"
              class="form-input"
          />
          <input
              type="text"
              v-model="lastName"
              placeholder="Apellido"
              class="form-input"
          />
        </div>

        <div class="form-group">
          <input
              type="email"
              v-model="email"
              placeholder="Correo electrónico"
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

        <div class="form-group">
          <input
              type="password"
              v-model="confirmPassword"
              placeholder="Confirmar contraseña"
              class="form-input"
          />
        </div>

        <p class="terms-text">
          Al registrarte, aceptas nuestras <a href="#">Condiciones</a>, la
          <a href="#">Política de privacidad</a> y la
          <a href="#">Política de cookies</a>.
        </p>

        <button type="submit" class="btn-primary">Registrarse</button>
      </form>
      <p class="login-text">
        ¿Tienes una cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    submitForm() {
      alert('Formulario de registro enviado');
    },
  },
};
</script>

<style scoped>
/* Contenedor para centrar el formulario y añadir fondo */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://your-background-image-url.jpg'); /* Reemplaza con la URL de tu imagen de fondo */
  background-size: cover;
  background-position: center;
}

/* Estilos de la tarjeta del formulario de registro */
.register-card {
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semi-transparente */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

/* Encabezado */
.register-header {
  font-size: 2rem;
  font-weight: bold;
  color: #2d7e9f;
  margin-bottom: 1.5rem;
}

/* Estilos de los campos de formulario */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

/* Estilo de texto para los términos */
.terms-text {
  font-size: 0.8rem;
  color: #666;
  text-align: left;
  margin: 1rem 0;
}

.terms-text a {
  color: #2d7e9f;
  text-decoration: none;
}

.terms-text a:hover {
  text-decoration: underline;
}

/* Botón de registro */
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

/* Texto para iniciar sesión */
.login-text {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.login-text a {
  color: #2d7e9f;
  text-decoration: none;
}

.login-text a:hover {
  text-decoration: underline;
}
</style>
