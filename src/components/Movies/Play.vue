<template>
  <div class="flex flex-col justify-center m-9 border-solid border-2 rounded-2xl bg-white 
    shadow-lg border-b-4 border-emerald-300 text-center">
    <p class="my-9 font-bold md:text-2xl underline decoration-solid">
        Estas viendo ( {{name}} )
    </p>
    <hr class="mb-9 border-gray-300 shadow-xl border-2"/>
    <div class="flex flex-col lg:flex-row justify-center">
        <video :key="url" class="w-3/4" controls autoplay>
            <source :src="url" type="video/mp4">
        </video>
        <img class="md:m-auto lg:m-0 md:w-1/6" :src="posterURL" alt="Movie image"/>
    </div>
    <hr class="mt-9 border-gray-300 shadow-xl border-2"/>
    <p class="mt-9 mx-5 font-bold md:mx-20 lg:mx-52 md:text-2xl">Descripción de la película:</p>
    <p class="mb-9 mx-5 md:mx-20 lg:mx-52">{{description}}</p>
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