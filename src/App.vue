<template>
  <div class="m-1">
    <nav class="flex justify-between bg-emerald-500 shadow-lg shadow-gray-400 rounded-lg">
      <h1>.</h1>
      <div class="flex justify-items-center">
        <router-link 
          class="m-3 p-3 text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200" 
          to="/">
          Home
        </router-link>
        <router-link 
          class="m-3 p-3 text-white hover:text-green-700 hover:bg-green-300 rounded-lg duration-200" 
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
    background-color: #d5ffc8;
  }
</style>