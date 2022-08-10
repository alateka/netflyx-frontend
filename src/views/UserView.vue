<template>
<br>
<br>
<br>
  <MoviesAvailable/>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue"
import MoviesAvailable from "@/components/Movies/MoviesAvailable.vue"

export default {
  name: 'UserView',
  components: {
    MoviesAvailable,
    Footer
  },
  mounted() {
    if ( !this.$store.getters.isLogin ) {
        window.location.replace("#/login"); 
    }
  }
}
</script>
