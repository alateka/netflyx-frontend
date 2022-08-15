<template>
  <div>
    <nav class="flex justify-between shadow-xl rounded-b-3xl bg-gradient-to-r from-emerald-400 to-emerald-500 font-bold">
      <img class="w-10 ml-5" src="@/assets/images/play.svg" alt="logo">
      <div v-if="this.$store.getters.isLogin" class="flex">
        <router-link
          class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200" 
          to="/">
          Inicio
        </router-link>
        <router-link
          class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200"
          to="/user">
          Tus películas
        </router-link>
        <router-link
          class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200"
          to="/logout">
          Cerrar Sesión
        </router-link>
      </div>
      <div v-else class="flex">
        <router-link
          class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200" 
          to="/">
          Inicio
        </router-link>
        <router-link
          class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200"
          to="/login">
          Iniciar Sesión
        </router-link>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
<style>
  body {
    background-image: linear-gradient(to right, rgb(240, 255, 249), rgb(231, 252, 231));
  }
  @font-face {
    font-family: "Ubuntu-Light";
    src: local("Ubuntu-Light"),
    url(@/assets/Ubuntu-Light.ttf) format("truetype");
  }
  * {
    font-family: "Ubuntu-Light";
  }
</style>