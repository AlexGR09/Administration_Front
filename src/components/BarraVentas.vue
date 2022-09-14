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
            :active="active == 'Github'"
            id="Github"
            >
              Titulos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Discord'"
            id="Discord"
            >
              Tabla de contenidos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Twitter'"
            id="Twitter"
            >
              Especialidades médicas
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Medium'"
            id="Medium"
            >
              Clientes
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
        <vs-navbar-group>
          Admin
          <template #items>
            <vs-navbar-item
            :active="active == 'Github'"
            id="Github"
            >
              Usuarios
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Discord'"
            id="Discord"
            >
              Usuarios/Tipo de usuario
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Twitter'"
            id="Twitter"
            >
              Establecimientos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Medium'"
            id="Medium"
            >
              Equipos
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Medium'"
            id="Medium"
            >
              Edición de tablas adicionales
            </vs-navbar-item>
            <vs-navbar-item
            :active="active == 'Medium'"
            id="Medium"
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
                        MARKY APP
                      </v-list-item-title>
                      <v-list-item-subtitle class="text-h6">
                        Ventas
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
              <div class="px-2">
                <default-drawer-header />
                <v-divider class="mx-3 mb-2" />
                <v-list
                    dense
                    nav
                  >
                    <v-list-item
                      link
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-view-dashboard</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <router-link to="/ventas/dashboard"><v-list-item-title>Inicio</v-list-item-title> </router-link>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      link
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-file-document</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <router-link to="/ventas/cuestionario"><v-list-item-title>Cuestionarios</v-list-item-title> </router-link>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      link
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <router-link to="/ventas/newuser"><v-list-item-title>Crear cliente</v-list-item-title> </router-link>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      link
                    >
                      <v-list-item-icon>
                        <v-icon>mdi-bell</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <router-link to="/ventas/notifications"><v-list-item-title>Notificaciones</v-list-item-title> </router-link>
                      </v-list-item-content>
                    </v-list-item>
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
        items: [
          {
            title: 'Inicio',
            icon: 'mdi-view-dashboard',
            href: 'ventas/profile',
          },
          {
            title: 'Cuestionario',
            icon: 'mdi-file-document',
            to: '/ventas/profile/',
          },
          {
            title: 'Crear cliasente',
            icon: 'mdi-account',
            to: '/ventas/newuser/',
          },
          {
            title: 'Notificacionses',
            icon: 'mdi-bell',
            to: '/ventas/notifications/',
          },
        ],
        right: null,
      }
    },
    computed: {
      ...get('user', [
        'dark',
        'gradient',
        'image',
      ]),
      ...get('app', [
        'items',
        'version',
      ]),
      ...sync('app', [
        'drawer',
        'drawerImage',
        'mini',
      ]),
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
</style>
