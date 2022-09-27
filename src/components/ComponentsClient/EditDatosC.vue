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
            <v-autocomplete
              :placeholder="character.titulo"
              :items="titulos"
              dense
              filled
              hide-details
              label="Titulo"
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="4"
            md="3"
          >
            <v-file-input
              color="purple"
              :placeholder="character.foto"
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
            :placeholder="character.curp"
              label="CURP"
              hide-details
              filled
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
            md="3"
          >
            <v-text-field
              :placeholder="character.tipotelefono"
              label="Tipo de teléfono"
              filled
              hide-details
            ></v-text-field>
          </v-col>
          <v-col
            cols="4"
            md="3"
          >
            <v-text-field
              :placeholder="character.telefonocliente"
              label="Teléfono"
              filled
              hide-details
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
            md="5"
          >
          <v-autocomplete
              :items="especialidades"
              :placeholder="character.especialidad"
              filled
              dense
              hide-details
              chips
              small-chips
              label="Especialidades"
              multiple
              ></v-autocomplete>
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
    name: 'EditDatosC',
    data () {
      return {
        characters: [],
        titulos: ['Dr.', 'Dra.', 'Lic.', 'QFB', 'Ing'],
        especialidades: ['Acupuntura', 'Alergología', 'Anatomopatología', 'Anestesiología', 'Angiología', 'Audiología', 'Cardiología', 'Cardiología Pediátrica', 'Cirugía Cardiovascular y Torácica', 'Cirugía de la Mano', 'Cirugía Estética y Cosmética', 'Cirugía General', 'Cirugía Maxilofacial', 'Cirugía Oncológica', 'Cirugía Pediátrica', 'Cirugía Plástica', 'Dermatología', 'Dermatología Pediátrica', 'Diabetología', 'Endocrinología', 'Endoscopía', 'Enfermería', 'Fisioterapia', 'Gastroenterología', 'Gastroenterología Pediátrica', 'Genética', 'Geriatría', 'Ginecología Oncológica', 'Ginecología y Obstetricia', 'Hematología', 'Hematología Pediátrica', 'Homeopatía', 'Infectología', 'Infectología Pediátrica', 'Inmunología', 'Laboratorios Análisis Clínicos', 'Logopedia', 'Terapia Complementaria', 'Medicina Crítica y Terapia Intensiva', 'Medicina del Deporte', 'Medicina del Trabajo', 'Medicina Estética', 'Medicina Familiar', 'Medicina General', 'Medicina Integrada', 'Medicina Interna', 'Medicina Nuclear', 'Naturismo', 'Nefrología', 'Nefrología pediátrica', 'Neonatología', 'Neumología', 'Neumología pediátrica', 'Neurocirugía', 'Neurofisiología', 'Neurología', 'Neurología pediátrica', 'Nutrición', 'Nutriología clínica', 'Obesidad y delgadez', 'Odontología', 'Oftalmología', 'Oftalmología pediátrica', 'Oncología', 'Oncología pediátrica', 'Optometrismo', 'Ortopedia', 'Ortopedia infantil', 'Otorrinolaringología', 'Patología clínica', 'Pediatría', 'Podiatría', 'Podología', 'Proctología', 'Psicoanálisis', 'Psicología', 'Psicopedagogía', 'Psiquiatría', 'Psiquiatría infantil', 'Quiropráctica', 'Radiología', 'Radioterapia', 'Rehabilitación y Medicina física', 'Reumatología', 'Sexología', 'Algología', 'Traumatología y Ortopedia', 'Urgenciología', 'Urología', 'Reumatología pediátrica', 'Urología pediátrica', 'Cirugía Torácica', 'Radiooncología', 'Epidemiología', 'Odontología pediátrica', 'Cirugía Bariátrica', 'Foniatría', 'Otorrinolaringología pediátrica', 'Patología bucal', 'Alergología Pediátrica', 'Alergología e Inmunología', 'Bariatría', 'Coloproctología', 'Gastroenterología Endoscópica', 'Radiología Intervencionista', 'Spa'],
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
