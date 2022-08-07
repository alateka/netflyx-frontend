<template>
  <div class="fixed w-full">
    <nav class="flex justify-between shadow-xl rounded-b-3xl bg-gradient-to-r from-emerald-400 to-emerald-500">
      <img class="w-10" src="@/assets/logo.png" alt="logo">
      <div class="flex justify-items-center">
        <router-link v-show="!this.$store.getters.isLogin"
          class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200" 
          to="/">
          Home
        </router-link>
        <div class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200">
          <div v-if="this.$store.getters.isLogin">
            <router-link
              to="/logout">
              Cerrar Sesión
            </router-link>
          </div>
          <div v-else>
            <router-link
              to="/login">
              Iniciar Sesión
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
<style>
  body {
    background-image: linear-gradient(to right, rgb(240, 255, 249), rgb(231, 252, 231));
    }
</style>