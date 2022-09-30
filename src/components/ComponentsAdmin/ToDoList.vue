<template>
    <v-app>
      <v-app-bar
        color="secondary accent-4"
        max-height="55"
        height="55"
        elevation="0"
        dense
        dark
      >
        <v-toolbar-title>
          <v-icon>
            mdi-format-list-bulleted-type
          </v-icon>
          Lista de tareas
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            dense
            outlined
            class="mr-1"
          ></v-text-field>
        </div>
        <v-btn
            @click.stop="drawer = !drawer"
            icon
        >
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
        <v-btn
            @click.stop="dialog = true"
            icon
        >
          <v-icon>mdi-pencil-plus</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        right
        absolute
        temporary
      >
        <v-list-item>
          <v-list-item-avatar color="deep-purple accent-4">
            <v-icon color="white">mdi-filter-outline</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Mi lista de pendientes</v-list-item-title>
            <v-list-item-subtitle>Filtrar</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="['Todas', 'Alta', 'Media', 'Baja']"
                v-model="filters.prioridad"
                label="Prioridad"
                hide-details
                dense
                outlined
              ></v-select>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="['Todos', 'Pendientes', 'En proceso', 'Hecho']"
                v-model="filters.status"
                label="Status"
                hide-details
                dense
                outlined
              ></v-select>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-select
                :items="['Todos', 'Atrasado', 'Hoy', 'Futuro']"
                v-model="filters.deadline"
                label="Fecha límite"
                hide-details
                dense
                outlined
              ></v-select>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="tasks"
        sort-by="deadline"
      >
        <template v-slot:top>
          <v-toolbar
            flat
            height="0"
          >
            <v-dialog
              v-model="dialog"
              max-width="500px"
            >
              <v-card>
                <v-toolbar
                color="primary"
                dark
              > <v-card-title>
                  <h1>{{ formTitle }}</h1>
                </v-card-title>
              </v-toolbar>
                <v-card-text class="pb-0">
                  <v-container>
                    <v-form
                      ref="form"
                      v-model="form_valid"
                      lazy-validation
                    >
                      <v-row class="mt-1">
                        <v-col
                          cols="12"
                          sm="6"
                          md="12"
                        >
                          <v-text-field
                            v-model="editedItem.name"
                            :rules="[v => !!v || 'Nombre requerido']"
                            :readonly="editedIndex === 0"
                            required
                            label="Nombre de la tarea"
                            dense
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-select
                          :items="['Alta', 'Media', 'Baja']"
                            v-model="editedItem.prioridad"
                            :rules="[v => !!v || 'Prioridad requerida']"
                            :readonly="editedIndex === 0"
                            required
                            label="Prioridad"
                            dense
                            outlined
                          ></v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-select
                          :items="['Pendientes', 'En proceso', 'Hecho']"
                            v-model="editedItem.status"
                            :rules="[v => !!v || 'Status requerido']"
                            :readonly="editedIndex === 0"
                            required
                            label="Status"
                            dense
                            outlined
                          ></v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-dialog
                            ref="dialog"
                            v-model="modal_date_picker"
                            persistent
                            width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="editedItem.deadline"
                                :rules="[v => !!v || 'Fecha requerida']"
                                :readonly="editedIndex === 0"
                                required
                                label="Fecha límite"
                                dense
                                outlined
                                v-on="editedIndex === 0 ? '' : on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="editedItem.deadline"
                              scrollable
                              :first-day-of-week="0"
                              locale="es-mx"
                              class="pb-2"
                            >
                              <v-btn
                                text
                                color="primary"
                                @click="modal_date_picker = false"
                              >
                                Cancelar
                              </v-btn>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="blue darken-1"
                                class="white--text"
                                @click="$refs.dialog.save(editedItem.deadline)"
                              >
                                Select
                              </v-btn>
                            </v-date-picker>
                          </v-dialog>
                        </v-col>
                        <v-col
                          cols="12"
                        >
                          <v-textarea
                            outlined
                            dense
                            name="task_details"
                            label="Descripción de la tarea (opcional)"
                            auto-grow
                            v-model="editedItem.details"
                            :readonly="editedIndex === 0"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-container>
                </v-card-text>
                <v-card-actions
                    v-if="editedIndex !== 0"
                    class="pb-4"
                >
                  <v-btn
                  color="secondary"
                    text
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    class="white--text"
                    @click="save"
                  >
                    GUARDAR
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog
                v-model="dialogDelete"
                max-width="500px"
            >
              <v-card>
                <v-card-title class="text-h5">¿Estás seguro de borrar esta tarea?</v-card-title>
                <v-card-actions class="pb-4">
                  <v-btn
                    color="secondary"
                    text
                    @click="closeDelete"
                  >Cancelar</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    class="white--text"
                    @click="deleteItemConfirm"
                  >Si</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.prioridad`]="{ item }">
          <v-chip
            class="ma-2"
            :color="getprioridadColor(item.prioridad)"
            text-color="white"
            small
          >
            {{ item.prioridad }}
          </v-chip>
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            class="ma-2"
            :color="getStatusColor(item.status)"
            text-color="white"
            small
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:[`item.deadline`]="{ item }">
          <v-chip
            class="ma-2"
            :color="getDateColor(item.deadline)"
            :text-color="getDateColor(item.deadline)"
            outlined
            small
          >
            {{ getFormattedDate(item.deadline) }}
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="viewItem(item)"
          >
            mdi-eye
          </v-icon>
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
          <div class="mt-4 mb-4">
            Nothing to show 😞<br>
            <a
                class="text-decoration-underline"
                @click="initialize"
            >Click here</a> to reset.
          </div>
        </template>
      </v-data-table>
    </v-app>
  </template>
<script>
  export default {
    name: 'ToDoList',
    data: () => ({
      filters: {
        prioridad: '',
        status: '',
        deadline: '',
      },
      drawer: null,
      search: '',
      dialog: false,
      dialogDelete: false,
      tasks: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        prioridad: '',
        status: '',
        deadline: '',
        details: '',
      },
      defaultItem: {
        name: '',
        prioridad: '',
        status: '',
        deadline: '',
        details: '',
      },
      modal_date_picker: false,
      form_valid: true,
    }),
    computed: {
      headers () {
        return [
          { text: 'Tareas', align: 'start', sortable: false, value: 'name', divider: true },
          {
            text: 'Prioridad',
            value: 'prioridad',
            align: 'center',
            filter: value => {
              if (!this.filters.prioridad || this.filters.prioridad === 'All') return true
              return value === this.filters.prioridad
            },
          },
          {
            text: 'Status',
            value: 'status',
            align: 'center',
            filter: value => {
              if (!this.filters.status || this.filters.status === 'All') return true
              return value === this.filters.status
            },
          },
          {
            text: 'Fecha límite',
            value: 'deadline',
            align: 'center',
            filter: value => {
              if (!this.filters.deadline || this.filters.deadline === 'All') return true
              return this.classifyDate(value) === this.filters.deadline
            },
          },
          { text: 'Acciones', align: 'center', value: 'actions', sortable: false },
        ]
      },
      formTitle () {
        if (this.editedIndex === -1) {
          return 'Nueva tarea'
        } else if (this.editedIndex === 0) {
          return 'View task'
        } else {
          return 'Edit task'
        }
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
      getprioridadColor (prioridad) {
        if (prioridad === 'Alta') return 'red'
        else if (prioridad === 'Media') return 'yelBaja'
        else return 'grey'
      },
      getStatusColor (status) {
        if (status === 'Pendientes') return 'blue'
        else if (status === 'En proceso') return 'orange'
        else return 'success'
      },
      getFormattedDate (date) {
        return new Date(date).toJSON().slice(0, 10).replace(/-/g, '/')
      },
      classifyDate (date) {
        if (new Date().toJSON().slice(0, 10) === date) return 'For today'
        else if (new Date().toJSON().slice(0, 10) > date) return 'Overdue'
        else return 'For the future'
      },
      getDateColor (date) {
        if (this.classifyDate(date) === 'For today') return 'orange'
        else if (this.classifyDate(date) === 'Overdue') return 'red'
        else return 'success'
      },
      initialize () {
        this.tasks = [
          {
            name: 'Make the bed',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Baja',
            status: 'Pendientes',
            deadline: '2022-05-05',
          },
          {
            name: 'Have breakfast',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Alta',
            status: 'En proceso',
            deadline: '2021-05-22',
          },
          {
            name: 'Take a shower',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Media',
            status: 'Hecho',
            deadline: '2023-05-03',
          },
          {
            name: 'Call mom',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Alta',
            status: 'En proceso',
            deadline: '2021-05-25',
          },
          {
            name: 'Take the dog for a walk',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Media',
            status: 'Pendientes',
            deadline: '2024-05-13',
          },
          {
            name: 'Do the dishes',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Alta',
            status: 'Pendientes',
            deadline: '2021-05-21',
          },
          {
            name: 'Watch Game of Thrones',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Baja',
            status: 'En proceso',
            deadline: '2021-05-09',
          },
          {
            name: 'Go shopping',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Media',
            status: 'Hecho',
            deadline: '2021-05-20',
          },
          {
            name: 'Take a nap',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Alta',
            status: 'Pendientes',
            deadline: '2023-05-16',
          },
          {
            name: 'Go to the gym',
            details: 'Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.',
            prioridad: 'Baja',
            status: 'Hecho',
            deadline: '2021-05-19',
          },
        ]
      },
      viewItem (item) {
        this.editedIndex = 0
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      editItem (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm () {
        this.tasks.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close () {
        this.$refs.form.resetValidation()
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
        if (this.validateForm()) {
          if (this.editedIndex > -1) {
            Object.assign(this.tasks[this.editedIndex], this.editedItem)
          } else {
            this.tasks.push(this.editedItem)
          }
          this.close()
        }
      },
      validateForm () {
        return this.$refs.form.validate()
      },
    },
  }
</script>
