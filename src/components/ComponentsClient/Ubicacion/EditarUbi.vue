<template>
    <v-card>
      <v-card-text
        class ="mt-3"
      >
        <v-row>
            <v-col
            cols="4"
            md="4"
        >
            <v-autocomplete
            :items="titulos"
            color="purple"
            label="Tipo de ubicacion"
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
            chips
            small-chips
            label="Telefono"
            multiple
            ></v-text-field>
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
    name: 'EditarUbi',
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
