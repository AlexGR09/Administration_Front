<template>
  <v-card>
    <v-card-text
    class ="mt-3"
    v-for="character in characters"
              :key="character.id"
              >
      <v-row>
        <v-icon
          large
          color="cyan darken-1 darken-2"
        >
        mdi-certificate
        </v-icon>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            :value="character.titulo"
            label="Titulo"
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
          <v-file-input
            color="purple"
            :value="character.foto"
            large
            label="Foto de perfil"
            hide-details
            disabled
            prepend-icon="mdi-camera"
            filled
          />
        </v-col>
        <v-icon
          large
          color="cyan darken-1 darken-2"
        >
          mdi-file-account
        </v-icon>
        <v-col
          cols="4"
          md="5"
        >
          <v-text-field
          :value="character.curp"
            label="CURP"
            hide-details
            filled
            readonly
          >
        </v-text-field>
        </v-col>
        <v-icon
          large
          color="cyan darken-1 darken-2"
        >
          mdi-cellphone
        </v-icon>
        <v-col
          cols="4"
          md="4"
        >
          <v-text-field
            :value="character.tipotelefono"
            label="Tipo de teléfono"
            filled
            hide-details
            readonly
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
          md="4"
        >
          <v-text-field
            :value="character.telefonocliente"
            label="Teléfono"
            filled
            hide-details
            readonly
          ></v-text-field>
        </v-col>
        <v-icon
          large
          color="cyan darken-1 darken-2"
        >
          mdi-doctor
        </v-icon>
        <v-col
          cols="4"
          md="3"
        >
          <v-text-field
          :value="character.especialidad_id"
            label="Especialidad"
            filled
            hide-details
            disabled
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
    name: 'DatosCliente',
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
