<template>
  <div class="login">
    <LoginForm msg="Iniciar Sesión"/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>
