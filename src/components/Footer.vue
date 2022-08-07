<template>
    <div class="flex justify-around text-white shadow-xl rounded-t-3xl bg-gradient-to-r from-emerald-500 to-emerald-400 py-5">
        <p>DEMO PELIS</p>
        <p>ALPHA_0.0.1</p>
    </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    name: String,
    description: String,
    imgURL: String
  }
}
</script>
