<template>
  <div class="login">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  color: #42b983;
}
</style>
