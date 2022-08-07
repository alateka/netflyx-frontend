<template>
  <div>
    <p class="text-2xl text-center"><strong>{{msg}}</strong></p>
      <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-9">

        <label class="md:col-start-2 lg:col-start-3 text-center mt-5" for="email">Correo Electrónico</label>
        <input class="form-control px-3 py-1.5 border border-solid border-gray-300
        focus:text-gray-700 focus:bg-white focus:border-emerald-500 focus:outline-none
          rounded-xl md:col-start-2 lg:col-start-3 text-center mt-3"
          type="email" id="email" name="email" placeholder="Introduce tu email">

        <label class="md:col-start-2 lg:col-start-3 text-center mt-5" for="password">Contraseña</label>
        <input class="form-control px-3 py-1.5 border border-solid border-gray-300
         focus:text-gray-700 focus:bg-white focus:border-emerald-500 focus:outline-none
          rounded-xl md:col-start-2 lg:col-start-3 text-center mt-3" 
          type="password" id="password" name="password" placeholder="Introduce tu contraseña">

        <input class="shadow-lg cursor-pointer mt-9 md:col-start-2 sm:grid-cols-1 lg:col-start-3 m-3 p-3 text-white
          bg-green-400 hover:text-green-700 hover:bg-green-300 rounded-xl duration-200"
          type="submit" @click="login" value="Iniciar Sesión">

      </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'LoginForm',
  props: {
    msg: String
  },
  methods: {
    async login() {
      let userData = {};
      userData.email = document.getElementById("email").value;
      userData.password = document.getElementById("password").value;
      
      if ( userData.email != "" && userData.password != "" ) {
        const customConfig = {
          headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          }
        };
        const result = await axios.post('http://127.0.0.1:8083/api/1/login', userData, customConfig);
        if ( result.data != "Error" ) {
          localStorage.token = result.data;
          this.$store.dispatch('setLoginAction', true);
        } else {
          this.$store.dispatch('setLoginAction', false);
          alert("Error");
        }
      } else {
        alert("Rellene los campos");
      }
    }
  }
}
</script>