<template>
  <div class="center examplex">
    <vs-navbar
      v-model="active"
      center-collapsed
    >
      <template #left>
        <v-img
        width="50px"
              :src="
                require('@/assets/MARKy.png')"
            />
        <strong class="mr-1 font-weight-black">MARKY</strong>
        <span class="primary--text">APP</span>
      </template>
      <vs-navbar-item
        id="guide"
        :active="active == 'guide'"
      >
        Inicio
      </vs-navbar-item>
      <vs-navbar-item
        id="docs"
        :active="active == 'docs'"
      >
        Admin
      </vs-navbar-item>
      <template #right>
        <v-avatar
        color="indigo"
        size="36"
      >
         <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <h5>Juan Pérez Rodriguez</h5>
      <span></span>
        <vs-button
          flat
          href="/"
          color="#DA4311"
        >
          Cerrar sesión
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
    // Utilities
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'BarraCliente',
    data: () => ({
      active: 'guide',
    }),
  }
  </script>
  <style>
    span {
    margin: 0 15px;
}
  </style>
