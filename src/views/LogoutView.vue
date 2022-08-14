<template>
<br>
<br>
<br>
<div class="flex justify-center md:mt-9">
  <div class="rounded-2xl bg-white shadow-lg border-b-8 border-emerald-300">
    <img class="m-auto mt-9" src="@/assets/images/logout.svg" alt="logout icon">
    <p class="md:m-9 px-9 text-1xl md:text-3xl">¿Desea cerrar su sesión actual?</p>
    <div class="flex justify-center">
      <button @click="logout"
      class="shadow-lg cursor-pointer text-white bg-green-400
       hover:text-green-700 hover:bg-green-300 rounded-xl duration-200 p-5 m-5">SI</button>
      <button @click="back"
      class="shadow-lg cursor-pointer text-white bg-red-400 hover:text-red-700
       hover:bg-red-300 rounded-xl duration-200 p-5 m-5">NO</button>
    </div>
  </div>
</div>
  <Footer class="fixed bottom-0 w-full"/>
</template>

<script>
import Footer from "@/components/Footer.vue"
import axios from "axios"
import config from "@/config.json";

export default {
  name: 'Logout',
  components: {
    Footer
  },
  methods: {
    logout() {
      localStorage.token = "";
      location.reload();
    },
    back() {
      window.location.replace("#/user"); 
    }
  },
  mounted() {
    let customConfig = {
          headers: {
          "Authorization": localStorage.token,
          "Accept": "application/json",
          "Content-Type": "application/json"
          }
        };
    axios.get(`${config.BASE_URL_BACKEND}/api/1/check`, customConfig)
    .then((result) => {
      if (result.data == "OK") {
        this.$store.dispatch('setLoginAction', true);
      } else {
        this.$store.dispatch('setLoginAction', false);
        window.location.replace("#/login"); 
      }
    })
  }
}
</script>