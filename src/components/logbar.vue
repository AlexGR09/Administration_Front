<template>
    <div
    class="center examplex"
    >
      <vs-navbar
        center-collapsed
        v-model="active"
      >
        <template #left>
          <img
            :src="require('@/assets/MARKy.png')"
            alt=""
            width="30px"
          >
          <l>MARKY</l><a>APP</a>
        </template>
        <template #right>
          <vs-button
          color="#F0B4A0"
          href="/"
          >Iniciar sesión</vs-button>
          <vs-button
          href="/registro"
          color="#ee8a6a"
          >Registrarse</vs-button>
        </template>
      </vs-navbar>
    </div>
  </template>
  <script>
  export default {
    name: 'logbar',
    data: () => ({
      active: 'guide',
    }),
  }
  </script>
