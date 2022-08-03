<template>
  <div class="login">
    <h1 class="text-center">{{msg}}</h1>
      <form action="" method="post">
        <div class="flex justify-center">
          <input type="email" name="email" placeholder="Introduce tu email">
          <input type="password" name="pass" placeholder="Introduce tu contraseña">
        </div>
      </form>
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