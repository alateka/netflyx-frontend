<template>
<br>
<br>
<br>
<br>
    <LoginForm msg="Iniciar Sesión"/>
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
  },
  mounted() {
    if ( this.$store.getters.isLogin ) {
        window.location.replace("#/user"); 
    }
  }
}
</script>
