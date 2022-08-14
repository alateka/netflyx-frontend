<template>
  <div class="flex m-9 border-solid border-2 rounded-2xl bg-white shadow-lg overflow-hidden 
    flex-col md:flex-row lg:flex-row border-b-4 border-emerald-300">
    <a :href="url" target="_blank" class="flex">
      <img width="900" class="hover:scale-110 transition duration-300" :src="posterURL" alt="Movie image">
    </a>
    <div class="m-9">
      <a target="_blank" :href="url"
        class="flex flex-row justify-center shadow-lg px-5 py-3 text-white bg-emerald-400
         hover:text-green-700 hover:bg-emerald-300 rounded-xl duration-200 font-bold">
         Reproducir
         <img class="mx-5" width="20" src="@/assets/images/play.svg" alt="play logo"></a>
      <p class="my-5 font-bold text-2xl">{{name}}</p>
      <p>{{description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieAvailable",
  props: {
    name: String,
    description: String,
    posterURL: String,
    url: String
  }
}
</script>