<template>
  <v-card>
    <v-card-text
      v-for="character in characters"
      :key="character.id">
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
                :value="character.telefonopersonal"
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
                disabled
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
                :value="character.fechanacimiento"
                label="Fecha de nacimiento"
                filled
                hide-details
                readonly
            >
            </v-text-field>
            </v-col>
            <v-col
            cols="4"
            md="2"
            >
            <v-text-field
                :value="character.edad"
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
                :value="character.genero"
                label="Genero"
                filled
                hide-details
                readonly
            >
            </v-text-field>
            </v-col>
            <v-icon
            large
            color="cyan darken-1 darken-2"
            >mdi-google-maps
            </v-icon>
            <v-col
            cols="12"
            md="3"
            >
            <v-text-field
                label="Municipio"
                filled
                hide-details
                disabled
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
                disabled
            >
            </v-text-field>
            </v-col>
            <v-icon
            large
            color="cyan darken-1 darken-2"
            >mdi-map-marker-radius
            </v-icon>
            <v-col
            cols="4"
            md="4"
            >
            <v-text-field
                disabled
                label="Localidad"
                filled
                hide-details
                readonly
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
      name: 'DatosUsuario',
       data () {
        return {
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
  