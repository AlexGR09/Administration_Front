<template>
  <div>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-col></v-col>
            <v-hover
              v-slot="{ hover }"
              open-delay="200"
              v-for="character in characters"
              :key="character.id"
            >
              <v-card
              :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto mt-5"
                width="1244"
                height="195px"
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
                      size="150"
                    >
                      <v-icon
                        dark
                        size="140"
                      >
                        mdi-doctor
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col
                    cols="12"
                    md="7"
                  >
                    <v-card-title>
                      <h1>{{character.nombre }}</h1>
                    </v-card-title>
                    <v-card-subtitle>
                      <h3 class>
                        {{ character.titulo }}
                      </h3>
                    </v-card-subtitle>
                  </v-col>
                  <v-col>
                    <v-card-title>
                      <h3>ID:</h3>
                    </v-card-title>
                    <v-card-subtitle>
                      <h5>
                        {{ character.id }}
                      </h5>
                    </v-card-subtitle>
                    <v-card-title>
                      <h3>
                        Nombre de usuario:
                      </h3>
                    </v-card-title>
                    <v-card-subtitle>
                      <h5>
                        {{ character.username }}
                      </h5>
                    </v-card-subtitle>
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
                            Información de usuario
                          </v-chip>
                          <edit-datos />
                          <v-chip
                            class="mt-3"
                            color="primary"
                            label
                          >
                            Información de médico
                          </v-chip>
                          <edit-datos-c />
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
                  <datos-cliente />
                  </div>
                </v-expand-transition>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <barra-cliente />
  </div>
</template>
<script>
  import BarraCliente from '@/components/ComponentsClient/BarraCliente.vue'
  import DatosCliente from '@/components/ComponentsClient/DatosCliente.vue'
  import DatosUsuario from '@/components/ComponentsUser/DatosUsuario.vue'
  import EditDatos from '@/components/ComponentsUser/EditDatos.vue'
  import EditDatosC from '@/components/ComponentsClient/EditDatosC.vue'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  import axios from 'axios'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'panel',
    components: {
      BarraCliente,
      DatosCliente,
      DatosUsuario,
      EditDatos,
      EditDatosC,
    },

    data () {
      return {
        show: false,
        characters: [],
      }
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
