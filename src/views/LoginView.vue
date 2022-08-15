<template>
<br>
<br>
<br>
<br>
    <LoginForm msg="Inicie sesión para ver su catálogo de películas"/>
    <Footer class="invisible md:visible lg:visible fixed bottom-0 w-full"></Footer>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm,
    Footer
  }
}
</script>
