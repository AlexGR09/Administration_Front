<template>
    <div class="home">
      <img
      alt="Vue logo"
      src="../assets/logo.png"
      />
      <p>aaa</p>
      <mi-componente />
    </div>
  </template>
  <script>
  import MiComponente from '@/components/MiComponente.vue'
  export default {
    name: 'home',
    components: {
      MiComponente,
    },
  }
  </script>
