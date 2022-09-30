<template>
    <v-col
      md="4"
    >
        <div>
          <v-card
          class="d-flex flex-column pa-2 ma-2 base-card"
          >
            <v-card-title>
              <div class="text-h5 font-weight-light">Clientes sin documentación</div>
            </v-card-title>

            <div class="text-h7 font-weight-light pa-2">
              Please Select a Function
            </div>
          </v-card>
        </div>
      </v-col>
  </template>
  <script>
  export default {
    name: 'CardClientes',
    data: () => ({
      active: 'guide',
    }),
  }
  </script>
  <style>
    .main-row {
      padding: 15px;
    }
    .base-card {
      overflow-y: scroll;
      max-height: 80vh;
      height: 300px;
    }
    </style>
