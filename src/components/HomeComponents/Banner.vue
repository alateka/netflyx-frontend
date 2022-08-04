<template>
  <div class="flex m-9 rounded-xl bg-white shadow-lg overflow-hidden flex-col md:flex-row lg:flex-row">
    <img class="w-1/3 md:w-1/6 hover:scale-110 transition duration-300" :src="imgURL" alt="Star Wars image">
    <div class="m-9">
      <p class="font-bold">{{name}}</p>
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
