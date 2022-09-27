<template>
  <vs-navbar
    v-model="active"
    shadow
    square
    center-collapsed
  >
    <template #left>
      <vs-button
        flat
        icon
        color="white"
        @click="active = !active"
      >
        <v-icon>mdi-menu</v-icon>
      </vs-button>
    </template>
    <vs-navbar-item
      id="License"
      :active="active == 'License'"
    >
      Inicio
    </vs-navbar-item>
    <vs-navbar-group>
      Plataforma
      <template #items>
        <vs-navbar-item
          id="titulos"
          :active="active == 'titulos'"
        >
          Titulos
        </vs-navbar-item>
        <vs-navbar-item
          id="tabla"
          :active="active == 'tabla'"
        >
          Tabla de contenidos
        </vs-navbar-item>
        <vs-navbar-item
          id="especialidades"
          :active="active == 'especialidades'"
        >
          Especialidades médicas
        </vs-navbar-item>
        <vs-navbar-item
          id="clientes"
          :active="active == 'clientes'"
        >
          Clientes
        </vs-navbar-item>
      </template>
    </vs-navbar-group>
    <vs-navbar-group>
      Admin
      <template #items>
        <vs-navbar-item
          id="users"
          :active="active == 'users'"
        >
          Usuarios
        </vs-navbar-item>
        <vs-navbar-item
          id="typeuser"
          :active="active == 'typeuser'"
        >
          Usuarios/Tipo de usuario
        </vs-navbar-item>
        <vs-navbar-item
          id="establecimientos"
          :active="active == 'establecimientos'"
        >
          Establecimientos
        </vs-navbar-item>
        <vs-navbar-item
          id="equipos"
          :active="active == 'equipos'"
        >
          Equipos
        </vs-navbar-item>
        <vs-navbar-item
          id="tablasadi"
          :active="active == 'tablasadi'"
        >
          Edición de tablas adicionales
        </vs-navbar-item>
        <vs-navbar-item
          id="diagnóstico"
          :active="active == 'diagnóstico'"
        >
          Diagnóstico
        </vs-navbar-item>
      </template>
    </vs-navbar-group>
    <template #right>
      <vs-button
        flat
        href="/"
        color="#DA4311"
      >
        Cerrar sesión
      </vs-button>
    </template>
    <v-navigation-drawer
      id="default-drawer"
      v-model="active"
      hoverExpand
      :right="$vuetify.rtl"
      :mini-variant.sync="mini"
      mini-variant-width="80"
      app
      width="260"
    >
      <v-list-item>
        <v-list-item-avatar>
                <v-img
                  :src="
                    require('@/assets/MARKy.png')"
                />
              </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h3">
            <strong class="mr-1 font-weight-black">MARKY</strong>
            <a class="primary--text">APP</a>
          </v-list-item-title>
          <v-list-item-subtitle class="text-h6">
            Administración
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div class="px-2">
        <default-drawer-header />
        <v-divider class="mx-3 mb-2" />
        <v-list>
          <v-list-item-group
            v-model="model"
            active-class="bg-active"
          >
          <v-list-item
                        link
                        href="/administracion/"
                      >
                        <v-list-item-icon>
                          <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Inicio
                        </v-list-item-content>
                      </v-list-item>
            <v-list-item
              href="/admin/ubicacion"
              link
              id="home"
            >
              <v-list-item-icon>
                <v-icon>mdi-map-marker-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Crear establecimiento</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
              <v-list-group
                sub-group
                  >
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Usuarios</v-list-item-title>
                      </v-list-item-content>
                    </template>

                    <v-list-item
              href="/admin/info"
              link
              id="home"
            >
              <v-list-item-icon>
                <v-icon>mdi-account-card</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link
                  style="text-decoration: none;
                  color: inherit;"
                  to="/admin/info"
                ><v-list-item-title>Información fiscal</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              href="/admin/docs"
              link
              id="home"
            >
              <v-list-item-icon>
                <v-icon>mdi-file-document</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link
                  style="text-decoration: none;
                  color: inherit;"
                  to="/admin/docs"
                ><v-list-item-title>Documentación oficial</v-list-item-title> </router-link>
              </v-list-item-content>
            </v-list-item>
                  </v-list-group>
                      <v-list-item
                        link
                        href="/administracion"
                      >
                        <v-list-item-icon>
                          <v-icon>mdi-bell</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Notificaciones
                          <!-- <router-link
                          style="text-decoration: none;
                          color: inherit;"
                          to="/ventas/notifications"
                          ><v-list-item-title>Notificaciones</v-list-item-title> </router-link> -->
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                    </v-list>
                </div>
                <template #append>
                  <div class="pa-4 text-center">
                    <app-btn
                      block
                      class="text-none"
                      color="secondary"
                      href="/"
                    >
                      <v-icon left>
                        mdi-logout-variant
                      </v-icon>
                      Cerrar sesión
                    </app-btn>
                  </div>
                </template>
                <div class="pt-12" />
    </v-navigation-drawer>
        </vs-navbar>
  </template>
<script>
    // Utilities
  import { get, sync } from 'vuex-pathify'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'PanelAdmi',
    data () {
      return {
        active: true,
        drawer: null,
        right: null,
      }
    },
  }
</script>
<style>
    #default-drawer
      .v-list-item{
        margin-bottom: 8px
      }
      .v-list-item::before,
      .v-list-item::after{
        display: none
      }
      .v-list-group__header__prepend-icon,
      .v-list-item__icon{
        margin-top: 12px;
        margin-bottom: 12px;
        margin-left: 4px;
      }
      .v-navigation-drawer--mini-variant
        .v-list-item{
          justify-content: flex-start !important
        }
      .bg-active {
        background-color: #29c1cc;
        color : white !important;
      }
    .router-link-exact-active{
      color : rgb(0, 0, 0) !important;
      font-size: 10px;
    }
</style>
