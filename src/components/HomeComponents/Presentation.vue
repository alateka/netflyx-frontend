<template>
  <div id="presentation" class="m-9 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center">
    <img class="w-1/3 md:w-1/6 lg:w-1/12 m-auto md:m-0 lg:m-0" 
      src="@/assets/images/FilmIcon.svg" alt="Presentation image">
    <div class="m-9">
      <p class="text-center md:text-left lg:text-left ms:text-2xl md:text-4xl 
        lg:text-7xl underline decoration-double font-bold">{{name}}</p>
      <p class="mt-3 text-center md:text-left lg:text-left md:mt-9 lg:mt-9 font-bold">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  props: {
    name: String,
    description: String
  }
}
</script>
