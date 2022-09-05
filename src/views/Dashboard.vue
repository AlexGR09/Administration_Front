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
      :items="desserts"
    >
      <template v-slot:top>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <v-card>
              <v-card-title class="text-h3 primary">
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="1"
                    >
                      <v-text-field
                        v-model="editedItem.id"
                        label="ID"
                        disabled
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.date"
                        label="Fecha"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="7"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.specialty"
                        label="Especialidad"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.country"
                        label="Estado"
                      ></v-text-field>
                    </v-col>

                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
          v-model="dialogDelete"
          max-width="500px"
          >
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue darken-1"
                text
                @click="closeDelete"
                >
                Cancel
              </v-btn>
                <v-btn
                color="blue darken-1"
                text
                @click="deleteItemConfirm"
                >
                OK
              </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
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
        { text: 'Actions', value: 'actions', sortable: false },
        /*  {
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
        }, */
      ],
      /* items: [
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
      ], */
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
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
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
