<template>
  <div class="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <Banner
      name="STAR WARS"
      description="Descubre el universo de Star Wars y sus fantasticas películas."
      imgURL="https://st1.uvnimg.com/dims4/default/697e73d/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fs%2Fsquadron_videojuego_de_star_wars_3.jpg"/>
    <Banner
      name="Marvel Studios"
      description="Explora todas las películas de Marvel Studios"
      imgURL="https://st1.uvnimg.com/dims4/default/697e73d/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fs%2Fsquadron_videojuego_de_star_wars_3.jpg"/>
  </div>
</template>

<script>
import Banner from '@/components/HomeComponents/Banner.vue'

export default {
  name: 'HomeView',
  components: {
    Banner
  }
}
</script>
