<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="(chart, i) in charts"
            :key="`chart-${i}`"
            cols="12"
            md="6"
            lg="4"
          >
            <material-chart-card
              :color="chart.color"
              :data="chart.data"
              :options="chart.options"
              :responsive-options="chart.responsiveOptions"
              :title="chart.title"
              :type="chart.type"
            >
              <template #subtitle>
                <div class="font-weight-light text--secondary">
                  <div v-html="chart.subtitle" />
                </div>
              </template>

              <template #actions>
                <v-icon
                  class="mr-1"
                  small
                >
                  mdi-clock-outline
                </v-icon>

                <span
                  class="text-caption grey--text font-weight-light"
                  v-text="chart.time"
                />
              </template>
            </material-chart-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        v-for="({ actionIcon, actionText, ...attrs }, i) in stats"
        :key="i"
        cols="12"
        md="6"
        lg="3"
      >
        <material-stat-card v-bind="attrs">
          <template #actions>
            <v-icon
              class="mr-2"
              small
              v-text="actionIcon"
            />
            <div class="text-truncate">
              {{ actionText }}
            </div>
          </template>
        </material-stat-card>
      </v-col>

      <v-col
        cols="12"
        md="12"
      >
        <material-card
          color="#eb8d69
"
          full-header
        >
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h3 font-weight-light">
                Cuestionario Clientes
              </div>
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'
  import Vue from 'vue'

  const lineSmooth = Vue.chartist.Interpolation.cardinal({
    tension: 0,
  })

  export default {
    name: 'DashboardView',

    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Fecha',
          value: 'date',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Nombre',
          value: 'name',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Especialidad',
          value: 'specialty',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Estado',
          value: 'country',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Editar',
          value: 'edit',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Crear cliente',
          value: 'create',
          align: 'center',
        },
      ],
      items: [
        {
          id: 1,
          date: '29/08/22',
          name: 'Victor Amado Padron Palomera',
          specialty: 'Alergología e inmunología',
          country: 'Tuxtla Gutierrez, Chiapas',
          edit: 'Editar',
          create: 'Crear cliente',
        },
        {
          id: 2,
          date: '26/08/22',
          name: 'Armando Fernández Fonseca',
          specialty: 'Medicina estética',
          country: 'Tuxtla Gutierrez, Chiapas',
          edit: 'Editar',
          create: 'Crear cliente',
        },
        {
          id: 3,
          date: '22/08/22',
          name: 'José Ricardo López Bezares',
          specialty: 'Urología',
          country: 'Tuxtla Gutiérrez, Chiapas',
          edit: 'Editar',
          create: 'Crear cliente',
        },
        {
          id: 4,
          date: '11/02/22',
          name: 'Dakota Rice',
          specialty: 'Cardiologo',
          country: 'Nigeria',
          edit: 'Editar',
          create: 'Crear cliente',
        },
        {
          id: 5,
          date: '22/08/22',
          name: 'Alan Burgos Páez',
          specialty: 'Otorrinolaringologia',
          country: 'Mazatlán, Sinaloa',
          edit: 'Editar',
          create: 'Crear cliente',
        },
        {
          id: 6,
          date: '22/08/22',
          name: 'Paola Carolina García Parra Pérez',
          specialty: 'Algología',
          country: 'Tuxtla Gutiérrez, Chiapas',
          edit: 'Editar',
          create: 'Crear cliente',
        },
      ],
    }),

    computed: {
      sales: get('sales/sales'),
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      },
    },
  }
</script>
