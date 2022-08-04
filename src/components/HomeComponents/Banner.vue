<template>
  <div class="flex m-9 rounded-xl bg-white shadow-lg overflow-hidden">
    <img :src="imgURL" alt="Star Wars image">
    <div class="m-9">
      <p><strong>{{name}}</strong></p>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    name: String,
    description: String,
    imgURL: String
  },
  methods: {
    alerta() {
      alert("Hola")
    }
  }
}
</script>
