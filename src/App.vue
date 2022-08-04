<template>
  <div class="m-1">
    <nav class="flex justify-between shadow-xl rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500">
      <img class="w-10" src="@/assets/logo.png" alt="logo">
      <div class="flex justify-items-center">
        <router-link 
          class="m-3 p-3 hover:shadow-xl text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200" 
          to="/">
          Home
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
<script>

</script>
<style>
  body {
    background-image: linear-gradient(to right, #f6fffc, #ceffdd);
  }
</style>