<template>
  <div class="flex m-9 rounded-2xl bg-white shadow-lg overflow-hidden flex-col md:flex-row lg:flex-row">
    <img class="hover:scale-110 transition duration-300" :src="imgURL" alt="Movie image">
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
  }
}
</script>
