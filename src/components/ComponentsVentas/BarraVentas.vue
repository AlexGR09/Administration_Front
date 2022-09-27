<template>
  <vs-navbar
    shadow
    square
    center-collapsed
    v-model="active"
  >
        <template #left>
          <vs-button
            @click="active = !active"
            flat
            icon
            color="white"
          >
            <v-icon>mdi-menu</v-icon>
          </vs-button>
        </template>
        <vs-navbar-item
        :active="active == 'License'"
        id="License"
        >
          Inicio
        </vs-navbar-item>
        <vs-navbar-group>
          Plataforma
          <template #items>
            <vs-navbar-item
            :active="active == 'titulos'"
            id="titulos"
            >
              Titulos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'tabla'"
            id="tabla"
            >
              Tabla de contenidos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'especialidades'"
            id="especialidades"
            >
              Especialidades médicas
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'clientes'"
            id="clientes"
            >
              Clientes
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
        <vs-navbar-group>
          Admin
          <template #items>
            <vs-navbar-item
            :active="active == 'users'"
            id="users"
            >
              Usuarios
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'typeuser'"
            id="typeuser"
            >
              Usuarios/Tipo de usuario
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'establecimientos'"
            id="establecimientos"
            >
              Establecimientos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'equipos'"
            id="equipos"
            >
              Equipos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'tablasadi'"
            id="tablasadi"
            >
              Edición de tablas adicionales
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'diagnóstico'"
            id="diagnóstico"
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
          >Cerrar sesión</vs-button>
        </template>
        <v-navigation-drawer
          id="default-drawer"
          hoverExpand
          v-model="active"
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
                        <span class="primary--text">APP</span>
                      </v-list-item-title>
                      <v-list-item-subtitle class="text-h6">
                        Ventas
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
                    href="/ventas/dashboard"
                      link
                      id="dashboard"
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-view-dashboard</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>Inicio
                        <!-- <router-link
                        style="text-decoration: none;
                        color: inherit;"
                        to="/ventas/dashboard"
                        ><v-list-item-title>Inicio</v-list-item-title></router-link> -->
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                    href="/ventas/cuestionario"
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
                        to="/ventas/cuestionario"
                        ><v-list-item-title>Cuestionarios</v-list-item-title> </router-link>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      link
                      href="/ventas/dashboard"
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>Crear cliente
                        <!-- <router-link
                        style="text-decoration: none;
                        color: inherit;"
                        to="/ventas/newuser"
                        ><v-list-item-title>Crear cliente</v-list-item-title> </router-link> -->
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      link
                      href="/ventas/notifications"
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
    name: 'BarraVentas',
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
