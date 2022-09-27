<template>
    <v-card>
      <v-card-text
        v-for="character in characters"
        :key="character.id"
      >
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
              value
              :placeholder="character.telefonopersonal"
              label="Teléfono (personal)"
              hide-details
              filled
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="4"
            md="3"
          >
            <v-text-field
              color="purple"
              label="Tipo de usuario"
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
              :placeholder="character.email"
              label="Email"
              hide-details
              filled
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
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Fecha de nacimiento"
                  readonly
                  hide-details
                  filled
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col
            cols="4"
            md="2"
          >
            <v-text-field
              :placeholder="character.edad"
              label="Edad"
              filled
              hide-details
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
              :placeholder="character.genero"
              label="Genero"
              filled
              hide-details
            >
            </v-text-field>
          </v-col>
          <v-icon
            large
            color="cyan darken-1 darken-2"
          >
            mdi-google-maps
          </v-icon>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              :placeholder="character.municipio.nombre"
              label="Municipio"
              filled
              hide-details
            >
            </v-text-field>
          </v-col>
          <v-col
            cols="4"
            md="4"
          >
            <v-text-field
            :placeholder="character.municipio.estado.nombre"
              label="Estado"
              filled
              hide-details
            >
            </v-text-field>
          </v-col>
          <v-icon
            large
            color="cyan darken-1 darken-2"
          >
            mdi-map-marker-radius
          </v-icon>
          <v-col
            cols="4"
            md="4"
          >
            <v-text-field
              value
              :placeholder="character.municipio.estado.pais.nombre"
              label="Localidad"
              filled
              hide-details
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'EditDatos',
    data () {
      return {
        characters: [],
        activePicker: null,
        date: null,
        menu: false,
      }
    },
    mounted () {
      console.log('verificando')
      this.getTodos()
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
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
      save (date) {
        this.$refs.menu.save(date)
      },
    },
  }
</script>
