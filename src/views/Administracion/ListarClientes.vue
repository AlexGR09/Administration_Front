<template>
  <div>
    <!--   -------------------------------Pruebas----------------------------- -->
    <v-card
      max-width="1450"
      class="mx-auto mt-16"
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Lista de clientes</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-card>
    <panel-admi />
  </div>
</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  import PanelAdmi from '@/components/ComponentsAdmin/PanelAdmi.vue'
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    name: 'ListarClientes',
    components: {
      PanelAdmi,
    },
    data () {
      return {
        headers: [
          {
            text: 'Nombre del cliente',
            align: 'start',
            value: 'name',
          },
          { text: 'Especialidad', value: 'especialidad' },
          { text: 'Ubicación', value: 'ubicacion' },
          { text: 'RFC', value: 'RFC' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            especialidad: 159,
            ubicacion: 6.0,
            RFC: 24,
          },
          {
            name: 'Ice cream sandwich',
            especialidad: 237,
            ubicacion: 9.0,
            RFC: 37,
          },
          {
            name: 'Eclair',
            especialidad: 262,
            ubicacion: 16.0,
            RFC: 23,
          },
          {
            name: 'Cupcake',
            especialidad: 305,
            ubicacion: 3.7,
            RFC: 67,
          },
          {
            name: 'Gingerbread',
            especialidad: 356,
            ubicacion: 16.0,
            RFC: 49,
          },
          {
            name: 'Jelly bean',
            especialidad: 375,
            ubicacion: 0.0,
            RFC: 94,
          },
          {
            name: 'Lollipop',
            especialidad: 392,
            ubicacion: 0.2,
            RFC: 98,
          },
          {
            name: 'Honeycomb',
            especialidad: 408,
            ubicacion: 3.2,
            RFC: 87,
          },
          {
            name: 'Donut',
            especialidad: 452,
            ubicacion: 25.0,
            RFC: 51,
          },
          {
            name: 'KitKat',
            especialidad: 518,
            ubicacion: 26.0,
            RFC: 65,
          },
        ],
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
