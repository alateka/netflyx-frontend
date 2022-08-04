<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
    <Presentation class="sm:col-span-0 lg:col-span-2"
      name="NETFLYX"
      description="Descubre cosas increibles y apasionantes en Netflyx"/>
    <Banner
      name="STAR WARS"
      description="Star Wars, conocida también en español como La guerra de las galaxias,7​8​9​ es una franquicia y universo compartido compuesta primordialmente de una serie de películas concebidas por el cineasta estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt Disney Company a partir de 2012. Su trama describe las vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan con elementos como «la Fuerza», un campo de energía metafísico y omnipresente10​ que posee un «lado luminoso» impulsado por la sabiduría, la nobleza y la justicia y utilizado por los Jedi, y un «lado oscuro» usado por los Sith y provocado por la ira, el miedo y el odio."
      imgURL="https://st1.uvnimg.com/dims4/default/697e73d/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fs%2Fsquadron_videojuego_de_star_wars_3.jpg"/>
    <Banner
      name="STAR TREK"
      description="Star Trek: The Original Series (en Hispanoamérica: Viaje a las estrellas: la serie original y en España: Star Trek o La conquista del espacio según la primera adaptación2​), es una serie de televisión de ciencia ficción estadounidense creada por Gene Roddenberry que se transmitió desde el 8 de septiembre del 1966 hasta el 2 de septiembre del 1969"
      imgURL="https://i.ebayimg.com/images/g/xxcAAOSwvIZiICHn/s-l300.jpg"/>
  </div>
</template>

<script>
import Banner from '@/components/HomeComponents/Banner.vue'
import Presentation from '@/components/HomeComponents/Presentation.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Presentation
}
}
</script>
