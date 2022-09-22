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
              v-for="character in characters" :key="character.id"
            >
              <v-card
              :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
                class="mx-auto mt-5"
                max-width="1244"
                height="195px"
               
              >
                <v-row >
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
                    md="6"
                  >
                    <v-card-title>
                      <h1>aa{{character.username }}</h1>
                    </v-card-title>
                    <v-card-subtitle>
                      <h3 class>
                        {{ character.apellidopaterno }} -->
                      </h3>
                    </v-card-subtitle>
                  </v-col>
                  <v-col>
                    <v-card-title>
                      <h3>ID:</h3>
                    </v-card-title>
                    <v-card-subtitle>
                      <h5>
                        aaa <!-- {{ character.id }} -->
                      </h5>
                    </v-card-subtitle>
                    <v-card-title>
                      <h3>
                        Nombre de usuario:
                      </h3>
                    </v-card-title>
                    <v-card-subtitle>
                      <h5>
                        a
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
                    <v-divider></v-divider>
                    <v-card-text>
                       <v-row>
                        <v-icon
                          large
                          color="cyan darken-1 darken-2"
                        >
                          mdi mdi-cellphone
                        </v-icon>
                        <v-col
                          cols="12"
                          md="3"
                        >
                          <v-text-field

                            label="Teléfono (personal)"
                            hide-details
                            filled
                            readonly
                          >
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="4"
                          md="3"
                        >
                          <v-text-field
                            color="purple"
                            label="Teléfono"
                            hide-details
                            filled
                          />
                        </v-col>
                        <v-icon
                          large
                          color="cyan darken-1 darken-2"
                        >
                          mdi mdi-email
                        </v-icon>
                        <v-col
                          cols="4"
                          md="5"
                        >
                          <v-text-field
                          :value="character.email"
                            label="Email"
                            hide-details
                            filled
                            readonly
                          />
                        </v-col>
                        <v-icon
                          large
                          color="cyan darken-1 darken-2"
                        >
                          mdi mdi-calendar
                        </v-icon>
                        <v-col
                          cols="4"
                          md="4"
                        >
                          <v-text-field
                            label="Fecha de nacimiento"
                            filled
                            hide-details
                            readonly
                          />
                        </v-col>
                        <v-col
                          cols="4"
                          md="2"
                        >
                          <v-text-field
                            label="Edad"
                            filled
                            hide-details
                            readonly
                          >
                          </v-text-field>
                        </v-col>
                        <v-icon
                          large
                          color="cyan darken-1 darken-2"
                        >
                          mdi mdi-account
                        </v-icon>
                        <v-col
                          cols="4"
                          md="5"
                        >
                          <v-text-field
                            label="Genero"
                            filled
                            hide-details
                            readonly
                          />
                        </v-col>
                        <v-icon
                          large
                          color="cyan darken-1 darken-2"
                        >mdi-map-marker-radius
                        </v-icon>
                        <v-col
                          cols="12"
                          md="3"
                        >
                          <v-text-field
                            label="Municipio"
                            filled
                            hide-details
                            readonly
                          >
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="4"
                          md="4"
                        >
                          <v-text-field
                            label="Entidad"
                            filled
                            hide-details
                            readonly
                          >
                          </v-text-field>
                        </v-col>
                        <v-col
                          cols="4"
                          md="4"
                        >
                          <v-text-field
                            label="Localidad"
                            filled
                            hide-details
                            readonly
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
                    </v-card-text>
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
  import BarraCliente from '@/components/BarraCliente.vue'
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
