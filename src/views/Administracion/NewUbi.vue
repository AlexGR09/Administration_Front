<template>
  <div class ="new">
    <v-container
      id="create-user-view"
      fluid
      tag="section"
    >
         <v-row>
             <v-col cols="12">
             <v-row justify="center">
                 <v-col
                 cols="12"
                 md="10"
                 >
                 <v-col
                 class="mt-5"
                 cols="12"
                 md="12"
                 >
                     <material-card
                         color="primary"
                         icon="mdi-home-map-marker"
                         >
                             <template #title>
                                 Nuevo establecimiento — <small class="text-body-1">Completa con los nuevos datos</small>
                             </template>
                             <v-form>
                                 <v-container class="py-0">
                                     <v-row>
                                         <v-col
                                                 cols="4"
                                                 md="12"
                                             >
                                         <v-stepper
                                         v-model="e13"
                                         vertical
                                         >
                                         <v-stepper-step
                                             step="1"
                                             complete
                                         >
                                             Información oficial
                                         </v-stepper-step>
                                         <v-stepper-content step="1">
                                             <v-card>
                                             <v-row>
                                                 <v-col
                                                 cols="12"
                                                 md="4"
                                             >
                                             <v-autocomplete
                                                 :items="Clientes"
                                                 dense
                                                 filled
                                                 hide-details
                                                 label="Cliente asignado"
                                                 ></v-autocomplete>
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="4"
                                             >
                                             <v-autocomplete
                                                :items="tipoubi"
                                                 color="purple"
                                                 label="Tipo de ubicacion"
                                                 hide-details
                                                 filled
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="4"
                                             >
                                             <v-text-field
                                                 filled
                                                 dense
                                                 chips
                                                 hide-details
                                                 small-chips
                                                 label="Email"
                                                 multiple
                                                 ></v-text-field>
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="6"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 hide-details
                                                 label="Aviso de funcionamiento COFEPRIS"
                                                 filled
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="6"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 hide-details
                                                 label="Aviso de publicidad COFEPRIS"
                                                 filled
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="4"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 hide-details
                                                 label="Teléfono citas"
                                                 filled
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="4"
                                             >
                                             <v-autocomplete
                                              :items="tipotel"
                                                 filled
                                                 dense
                                                 hide-details
                                                 chips
                                                 small-chips
                                                 label="Tipo telefono"
                                                 multiple
                                                 ></v-autocomplete>
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="4"
                                             >
                                             <v-text-field
                                              :items="especialidades"
                                                 filled
                                                 dense
                                                 hide-details
                                                 chips
                                                 small-chips
                                                 label="Telefono"
                                                 multiple
                                                 ></v-text-field>
                                             </v-col>
                                         </v-row>
                                         <v-btn
                                             color="primary"
                                             @click="e13 = 2"
                                             >
                                             Continue
                                             </v-btn>
                                         <v-divider></v-divider>
                                         </v-card>
                                         </v-stepper-content>
                                         <v-stepper-step
                                             step="2"
                                             complete
                                         >
                                            Dirección de establecimiento
                                         </v-stepper-step>
                                         <v-stepper-content step="2">
                                             <v-row>
                                                 <v-col
                                                 cols="4"
                                                 md="6"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 label="Tipo de vialidad"
                                                 filled
                                                hide-details
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="6"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 label="Nombre vialidad"
                                                 filled
                                                hide-details
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="6"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 label="Num. Exterior"
                                                 filled
                                                hide-details
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="12"
                                                 md="3"
                                             >
                                             <v-autocomplete
                                                 :items="alcance"
                                                 dense
                                                 hide-details
                                                 filled
                                                 label="Num. Interior"
                                                 ></v-autocomplete>
                                             </v-col>
                                             <v-col
                                                 cols="12"
                                                 md="3"
                                             >
                                             <v-autocomplete
                                                 :items="tipo"
                                                 dense
                                                 hide-details
                                                 filled
                                                 label="Tipo de colonia"
                                                 ></v-autocomplete>
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="2"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 label="Nombre de colonia"
                                                 filled
                                                hide-details
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="2"
                                             >
                                             <v-text-field
                                                 color="purple"
                                                 label="Código postal"
                                                 filled
                                                hide-details
                                             />
                                             </v-col>
                                             <v-col
                                                 cols="4"
                                                 md="6"
                                             >
                                             <v-file-input
                                                 label="Imagen establecimiento"
                                                 filled
                                                 hide-details
                                                 ></v-file-input>
                                             </v-col>
                                             </v-row>
                                             <v-btn
                                             color="primary"
                                             @click="e13 = 3"
                                             >
                                             Finalizar
                                             </v-btn>
                                             <v-divider
                                                 vertical
                                                 ></v-divider>
                                                 <v-divider
                                                 vertical
                                                 ></v-divider>
                                             <v-btn
                                             color="primary"
                                             @click="e13 = 1"
                                             >
                                             atras
                                             </v-btn>
                                         <v-divider></v-divider>
                                         </v-stepper-content>
                                         </v-stepper>
                                         </v-col>
                                     </v-row>
                                     </v-container>
                                 </v-form>
                     </material-card>
                 </v-col>
             </v-col>
             </v-row>
         </v-col>
             </v-row>
     </v-container>
   <panel-admi  />
     </div>
 </template>
 <script>
   import PanelAdmi from '@/components/ComponentsAdmin/PanelAdmi.vue'
   import axios from 'axios'
   export default {
     components: {
        PanelAdmi,
     },
     data: () => ({
       e13: 1,
       tipoubi: ['Consultorio','Clínica','Laboratorio de análisis clínicos','Spa'],
       Clientes: [character.nombre],
       tipotel: ['Móvil','Casa','Trabajo'],
       alcance: ['Cliente', 'Externo', 'Interno'],
       tipo: ['Auxiliar publicitario', 'Médico', 'Propietario'],
       value: null,
       date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
       menu: false,
       modal: false,
       menu2: false,
       characters: [],
     }),
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
