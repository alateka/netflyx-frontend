<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="alerta">Pulsame</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  methods: {
    alerta() {
      alert("Hola")
    }
  }
}
</script>
