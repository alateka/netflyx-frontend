<template>
<br>
<br>
<br>
  <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
    <MovieAvailable v-for="movie in movies"
    :name="movie.name" 
    :description="movie.description" 
    :posterURL="movie.poster"
    :url="movie.url"/>
  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue"
import MovieAvailable from "@/components/Movies/MovieAvailable.vue"
import axios from "axios"
import config from "@/config.json";

export default {
  name: 'UserView',
  components: {
    MovieAvailable,
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
          window.location.replace("#/login");
        }
      })

      
      customConfig = {
          headers: {
          "Authorization": localStorage.token,
          "Accept": "application/json",
          "Content-Type": "application/json"
          }
        };
    axios.get(`${config.BASE_URL_BACKEND}/api/1/movies`, customConfig)
    .then((result) => {
      this.movies = result.data.movies;
    })
  }
}
</script>
