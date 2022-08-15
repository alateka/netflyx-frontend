<template>
<br>
<br>
<br>
  <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
    <Presentation class="sm:col-span-0 lg:col-span-2"
      name="NETFLYX"
      description="Descubre las películas mas increibles y apasionantes en Netflyx"/>
    <hr class="m-auto border-gray-300 shadow-xl w-4/5 border-2 sm:col-span-0 lg:col-span-2"/>
    <Card v-for="movie in movies" 
      :name="movie.title"
      :description="movie.overview" 
      :imgURL="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+movie.poster_path"/>
  </div>
  <Footer />
</template>
<script>
import Card from "@/components/HomeComponents/Card.vue"
import Presentation from "@/components/HomeComponents/Presentation.vue"
import Footer from "@/components/Footer.vue"
import axios from "axios"
import config from "@/config.json";

export default {
  name: 'HomeView',
  components: {
    Card,
    Presentation,
    Footer
  },
  data() {
    return {
      movies: []
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
      }
    })


    axios.get(`${config.BASE_URL_THEMOVIEDB}discover/movie?sort_by=popularity.desc&api_key=${config.THEMOVIEDB_API_KEY}&language=es-MX`)
    .then((result) => {
      this.movies = result.data.results;
    })
  }
}
</script>