<template>
    <v-hover
    v-slot="{ hover }"
    open-delay="200"
  >
    <v-card
    :elevation="hover ? 16 : 2"
    v-for="character in characters"
    :key="character.id"
      :class="{ 'on-hover': hover }"
      class="mx-auto mt-5"
      width="1244"
      height="155px"
    >
      <v-row>
        <v-col
          cols="12"
          md="2"
        >
          <v-avatar
            class="ml-2 mx-auto"
            color="#29c1cc"
            tile
            size="130"
          >
            <v-icon
              dark
              size="140"
            >
            mdi-home
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col
          cols="12"
          md="7"
        >
          <v-card-title>
           <!--  <h1>{{character.infofiscal.nombrecolonia }}</h1> -->
           <h1>Nombre de la ubicación</h1>
          </v-card-title>
          <v-card-subtitle>
            <h3 class>
              Especialidad de la ubicación
            </h3>
          </v-card-subtitle>
          <v-card-subtitle>
            <h3 class>
              Tipo de ubicación
            </h3>
          </v-card-subtitle>
        </v-col>
        <v-col>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
      <v-expand-transition>
        <div v-show="show">
          <v-dialog
            transition="dialog-top-transition"
            max-width="1200"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mt-5"
                color="secondary"
                v-bind="attrs"
                v-on="on"
              >Editar información</v-btn>
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar
                  color="primary"
                  dark
                ><h3>Editar tu perfil</h3></v-toolbar>
                <v-card-text>
              <v-row class = "mt-5">
                <v-chip
                  class="mt-2"
                  color="primary"
                  label
                >
                  Información de la ubicación
                </v-chip>
                <edit-datos />
            </v-row>
          </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn
                    class="error"
                    text
                    @click="dialog.value = false"
                  >Cancelar</v-btn>
                  <v-btn
                    text
                    class="secondary"
                    @click="dialog.value = false"
                  >Guardar</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
      <datos-usuario />
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  import EditarUbi from '@/components/ComponentsClient/Ubicacion/EditarUbi.vue'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'CardUbicacion',
    data () {
      return {
        characters: [],
      }
    },
    components: {
      EditarUbi,
    },
    mounted () {
      console.log('verificando')
      this.getTodos()
    },
    methods: {
      getTodos () {
        console.log('peticion GET')
        axios.get('http://127.0.0.1:8000/api/test/')
          .then(res => {
            console.log(res)
            this.characters = res.data.data
          })
          .catch(e => {
            console.log(e)
          })
      },
    },
  }
</script>
