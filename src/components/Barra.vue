<template>
    <div class="hidden">
      <vs-navbar
        shadow
        square
        center-collapsed
        v-model="active"
      >
        <template #left>
          <vs-button
            @click="activeSidebar = !activeSidebar"
            flat
            :mini-variant.sync="mini"
            mini-variant-width="80"
            icon
          >
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
        <vs-navbar-item
          :active="active == 'guide'"
          id="guide"
        >
          Guide
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'docs'"
          id="docs"
        >
          Documents
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'components'"
          id="components"
        >
          Components
        </vs-navbar-item>
        <vs-navbar-item
          :active="active == 'license'"
          id="license"
        >
          license
        </vs-navbar-item>
        <template #right>
          <vs-button flat>Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
      <div class="hidden">
      <vs-sidebar
        absolute
        hover-expand
        reduce
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
            <v-list-item-avatar>
            <v-img
                :src="
                require('@/assets/MARKy.png')"
            />
            </v-list-item-avatar>
        </template>
      <v-divider class="mx-3 mb-2" />
        <vs-sidebar-item id="home">
          <template #icon>
            <v-icon>mdi-home</v-icon>
          </template>
          Inicio
        </vs-sidebar-item>
        <vs-sidebar-item id="home">
          <template #icon>
            <v-icon>mdi-file-document</v-icon>
          </template>
          Cuestionarios
        </vs-sidebar-item>
        <vs-sidebar-item id="home">
          <template #icon>
            <v-icon>mdi-account-plus</v-icon>
          </template>
          Crear cliente
        </vs-sidebar-item>
        <vs-sidebar-item id="home">
          <template #icon>
            <v-icon>mdi-bell</v-icon>
          </template>
          Notificaciones
        </vs-sidebar-item>
        <template #footer>
            <div class="pa-4 text-center">
        <app-btn
          block
          class="text-none"
          color="secondary"
          href="/ventas/profile"
        >
          <v-icon left>
            mdi-logout-variant
          </v-icon>

          Cerrar sesión
        </app-btn>
      </div>
        </template>
      </vs-sidebar>
    </div>
    </div>
  </template>
  <script>
  import Vue from 'vue'
  import { get, sync } from 'vuex-pathify'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  Vue.use(Vuesax, {
  })
  export default {
    data () {
      return {
        right: null,
        drawer: null,
        active: 'home',
        activeSidebar: false,
      }
    },
    name: 'Barra',
  }
</script>
