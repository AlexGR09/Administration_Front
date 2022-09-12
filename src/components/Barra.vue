<template>
  <div class="hidden">
    <vs-navbar
      absolute
      hover-expand
      reduce
      v-model="active"
      open
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
      Inicio
      </vs-navbar-item>
      <vs-navbar-item
      :active="active == 'docs'"
      id="docs"
      >
      Cuestionarios
      </vs-navbar-item>
      <vs-navbar-item
      :active="active == 'components'"
      id="components"
      >
      Clientes
      </vs-navbar-item>
      <vs-navbar-item
      :active="active == 'license'"
      id="license"
      >
      Notificaciones
      </vs-navbar-item>
      <template #right>
        <vs-button
        href = "/"
        flat
        >
        Cerrar sesión</vs-button>
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
        <v-list-item>
      <v-list-item-avatar>
        <v-img
          :src="
            require('@/assets/MARKy.png')"
        />
      </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h3">
                MARKY APP
              </v-list-item-title>
              <v-list-item-subtitle class="text-h6">
                Ventas
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
      </template>
        <v-divider></v-divider>
        <vs-sidebar-item
          id="donate"
          >
          <template #icon>
            <v-icon>mdi-home</v-icon>
          </template>
          <router-link to="/ventas/dashboard">Inicio</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item
          id="drink"
          >
          <template #icon>
            <v-icon>mdi-file-document</v-icon>
          </template>
          <router-link to="/ventas/cuestionario">Cuestionarios</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
          <template #icon>
            <v-icon>mdi-account-plus</v-icon>
          </template>
          <router-link to="/ventas/newuser">Crear cliente</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <v-icon>mdi-bell</v-icon>
          </template>
          <router-link to="/ventas/notifications">Notificaciones</router-link>
        </vs-sidebar-item>
        <template #footer>
          <vs-button
            danger
            animation-type="scale"
          >
            <v-icon
              left
              color="white"
            >
            mdi-logout-variant
            </v-icon>
            <template #animate>
              Salir
            </template>
          </vs-button>
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
    computed: {
      ...sync('app', [
        'drawer',
        'mini',
      ]),
      name: get('route/name'),
    },
    data () {
      return {
        right: null,
        drawer: null,
        active: 'home',
        activeSidebar: true,
      }
    },
    name: 'Barra',
  }
</script>
<style scoped>
  .h4{
    display: flex
    align-items center
    justify-content center
    width 100%
  }
</style>
