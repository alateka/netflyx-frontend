<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
    <Presentation class="sm:col-span-0 lg:col-span-2"
      name="NETFLYX"
      description="Descubre cosas increibles y apasionantes en Netflyx"/>
    <Banner v-for="movie in movies" :name="movie.title" :description="movie.overview" 
            :imgURL="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+movie.poster_path"/>
  </div>
</template>

<script>
import Banner from '@/components/HomeComponents/Banner.vue'
import Presentation from '@/components/HomeComponents/Presentation.vue'
import axios from 'axios'

const APIKEY='39dd5dffd1fbb6692ec1f3e5e3378004'
const BASEURL='https://api.themoviedb.org/3/'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Presentation
  },
  data() {
    return {
      movies: []
    }
  },
  mounted () {
    axios.get(`${BASEURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&language=es-MX`)
    .then((result) => {
      this.movies = result.data.results;
    })
  }
}
</script>
