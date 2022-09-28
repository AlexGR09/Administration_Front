<template>
  <div>
    <v-col lg="16">
      <v-row>
        <v-col
          md="10"
        >
          <v-card
            class="mx-auto mt-14"
            max-width="950"
            outlined
          >
            <v-card-actions>
              <material-card
                color="primary"
                icon="mdi-home-map-marker"
              >
                <template #title>
                  Documentación oficial — <small class="text-body-1">Seleccione los archivos a subir</small>
                </template>
                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <v-col
                        cols="4"
                        md="11"
                      >
                        <v-text-field
                          class="ml-8"
                          hide-details
                          small-chips
                          label="Cliente asignado"
                          filled
                        ></v-text-field>
                      </v-col>
                      <v-icon
                        size="60px"
                        hide-details
                        color="cyan darken-1 darken-2"
                      >
                        mdi-doctor
                      </v-icon>
                      <v-col
                        cols="4"
                        md="6"
                      >
                        <v-file-input
                          small-chips
                          label="INE"
                          filled
                          height="40"
                        ></v-file-input>
                      </v-col>
                      <v-col
                        cols="4"
                        md="6"
                      >
                        <v-file-input
                          small-chips
                          label="Clave Única de Registro de Población (CURP)"
                          filled
                        ></v-file-input>
                      </v-col>
                      <v-col
                        cols="4"
                        md="12"
                      >
                        <v-file-input
                          multiple
                          counter
                          small-chips
                          label="Cédula(s) profesional(es)"
                          filled
                          height="40"
                        ></v-file-input>
                      </v-col>
                      <v-col
                        cols="4"
                        md="12"
                      >
                        <v-file-input
                          multiple
                          counter
                          small-chips
                          label="Titulos"
                          filled
                          height="40"
                        ></v-file-input>
                      </v-col>
                      <v-col
                        cols="4"
                        md="12"
                      >
                        <v-file-input
                          multiple
                          counter
                          small-chips
                          label="Comprobante de domicilio de establecimiento"
                          filled
                          height="40"
                        ></v-file-input>
                      </v-col>
                      <v-col
                        cols="4"
                        md="12"
                      >
                        <v-file-input
                          small-chips
                          label="Constancia fiscal"
                          filled
                          height="40"
                        ></v-file-input>
                      </v-col>
                      <v-col
                        cols="4"
                        md="12"
                      >
                        <v-file-input
                          multiple
                          counter
                          small-chips
                          label="Certificados"
                          filled
                          height="40"
                        ></v-file-input>
                      </v-col>
                      <v-btn
                        color="primary"
                        @click="e13 = 2"
                      >
                        Finalizar
                      </v-btn>
                    </v-row>
                  </v-container>
                </v-form>
              </material-card>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          md="2"
        >
          <v-card
            class="mt-16 mr-5 text-center"
            v-for="character in characters"
            :key="character.id"
          >
            <v-img
              class="rounded-circle elevation-6 mt-n6 d-inline-block"
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
              width="128"
            />
            <v-card-text class="text-center">
              <h6 class="text-h6 mb-2 text--secondary">
                Especialidad
              </h6>
              <h4 class="text-h4 mb-3 text--primary">
                {{ character.user.nombre }}
              </h4>
              <h6 class="text-h6 mt-n3 mb-3 ">
                {{ character.user.apellidopaterno }} {{ character.user.apellidomaterno }}
              </h6>
              <p class="text--secondary">
                Nombre del establecimiento
              </p>
              <v-btn
                color="primary"
                rounded
              >
                Abrir información
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <panel-admi />
  </div>
</template>
<script>
  import PanelAdmi from '@/components/ComponentsAdmin/PanelAdmi.vue'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  import axios from 'axios'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'docOficial',
    components: {
      PanelAdmi,
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
        axios.get('http://127.0.0.1:8000/api/test')
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
