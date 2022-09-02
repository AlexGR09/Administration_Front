<template>
    <v-container
        id="create-user-view"
        fluid
        tag="section"
        >
            <v-row justify="center">
                <v-col
                cols="12"
                md="10"
                >
                    <material-card
                        color="primary"
                        icon="mdi-file-document"
                        >
                            <template #title>
                                Nuevo usuario — <small class="text-body-1">Completa con los nuevos datos</small>
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
                                            Name of step 1
                                        </v-stepper-step>
                                    
                                        <v-stepper-content step="1">
                                            <v-card
                                            color="grey lighten-1"
                                            class="mb-12"
                                            height="200px"
                                            ></v-card>
                                            <v-btn
                                            color="primary"
                                            @click="e13 = 2"
                                            >
                                            Continue
                                            </v-btn>
                                            
                                        </v-stepper-content>
                                    
                                        <v-stepper-step
                                            step="2"
                                            complete
                                        >
                                            Name of step 2
                                        </v-stepper-step>
                                    
                                        <v-stepper-content step="2">
                                            <v-card
                                            color="grey lighten-1"
                                            class="mb-12"
                                            height="200px"
                                            ></v-card>
                                            <v-btn
                                            color="primary"
                                            @click="e13 = 3"
                                            >
                                            Continue
                                            </v-btn>
                                            <v-btn
                                            color="primary"
                                            @click="e13 = 1"
                                            >
                                            atras
                                            </v-btn>
                                        </v-stepper-content>
                                    
                                        <v-stepper-step
                                            step="3"
                                        >
                                            Ad templates
                                        </v-stepper-step>
                                    
                                        <v-stepper-content step="3">
                                            <v-card
                                            color="grey lighten-1"
                                            class="mb-12"
                                            height="200px"
                                            ></v-card>
                                            <v-btn
                                            color="primary"
                                            @click="e13 = 4"
                                            >
                                            Finalizar
                                            </v-btn>
                                            <v-btn
                                            color="primary"
                                            @click="e13 = 2"
                                            >
                                            atras
                                            </v-btn>
                                        </v-stepper-content>
                                        </v-stepper>
                                        </v-col><!-- 
                                            <v-col
                                                cols="12"
                                                md="2"
                                            >
                                            <v-autocomplete
                                                :items="titulos"
                                                dense
                                                filled
                                                label="Titulo"
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Nombre(s)"
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="3"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Apellido Paterno"
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="3"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Apellido Materno"
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="9"
                                            >
                                            <v-autocomplete
                                             :items="especialidades"
                                                filled
                                                dense
                                                chips
                                                small-chips
                                                label="Especialidad(es)"
                                                multiple
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="3"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Otro (Subespecialidad)"
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                            <v-autocomplete
                                             :items="especialidades"
                                                filled
                                                dense
                                                chips
                                                small-chips
                                                label="Entidad"
                                                multiple
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                            <v-autocomplete
                                             :items="especialidades"
                                                filled
                                                dense
                                                chips
                                                small-chips
                                                label="Municipio"
                                                multiple
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                            <v-autocomplete
                                             :items="especialidades"
                                                filled
                                                dense
                                                chips
                                                small-chips
                                                label="Localidad"
                                                multiple
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="3"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Teléfono personal"
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="3"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Teléfono"
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="6"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Correo electrónico personal"
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="6"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Nombre de usuario"
                                                filled
                                               hide-details
                                            /> <c>Sin espacios, solo A-Z, a-z y 0-9, sin acentos o diéresis.
                                                Recomendado: Primer nombre y primer apellido (de preferencia), iniciales en mayúsculas.</c>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="6"
                                            >
                                            <v-text-field 
                                                color="purple"
                                                label="Contraseña"
                                                filled
                                               hide-details
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="11"
                                            >
                                            <v-switch
                                                v-model="name"
                                                class="text-justify"
                                                :rules="nameRules"
                                                required
                                                :label="`Estoy de acuerdo con enviar mis datos en el entendimiento de que serán tratados con la total confidencialidad por Guía Salud y que no serán compartidos a terceros, ni revelados, a menos que haya una requisición jurídica de por medio.`"
                                                ></v-switch>
                                                </v-col> -->
                                    </v-row>
                                    </v-container>
                                </v-form>
                    </material-card>
                </v-col>
            </v-row>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            e13: 2,
            titulos: ['Dr.', 'Dra.', 'Lic.', 'QFB','Ing'],
            especialidades: ['Acupuntura', 'Alergología', 'Anatomopatología', 'Anestesiología','Angiología','Audiología','Cardiología','Cardiología Pediátrica','Cirugía Cardiovascular y Torácica','Cirugía de la Mano','Cirugía Estética y Cosmética','Cirugía General','Cirugía Maxilofacial','Cirugía Oncológica','Cirugía Pediátrica','Cirugía Plástica','Dermatología','Dermatología Pediátrica','Diabetología','Endocrinología','Endoscopía','Enfermería','Fisioterapia','Gastroenterología','Gastroenterología Pediátrica','Genética','Geriatría','Ginecología Oncológica','Ginecología y Obstetricia','Hematología','Hematología Pediátrica','Homeopatía','Infectología','Infectología Pediátrica','Inmunología','Laboratorios Análisis Clínicos','Logopedia','Terapia Complementaria','Medicina Crítica y Terapia Intensiva','Medicina del Deporte','Medicina del Trabajo','Medicina Estética','Medicina Familiar','Medicina General','Medicina Integrada','Medicina Interna','Medicina Nuclear','Naturismo','Nefrología','Nefrología pediátrica','Neonatología','Neumología','Neumología pediátrica','Neurocirugía','Neurofisiología','Neurología','Neurología pediátrica','Nutrición','Nutriología clínica','Obesidad y delgadez','Odontología','Oftalmología','Oftalmología pediátrica','Oncología','Oncología pediátrica','Optometrismo','Ortopedia','Ortopedia infantil','Otorrinolaringología','Patología clínica','Pediatría','Podiatría','Podología','Proctología','Psicoanálisis','Psicología','Psicopedagogía','Psiquiatría','Psiquiatría infantil','Quiropráctica','Radiología','Radioterapia','Rehabilitación y Medicina física','Reumatología','Sexología','Algología','Traumatología y Ortopedia','Urgenciología','Urología','Reumatología pediátrica','Urología pediátrica','Cirugía Torácica','Radiooncología','Epidemiología','Odontología pediátrica','Cirugía Bariátrica','Foniatría','Otorrinolaringología pediátrica','Patología bucal','Alergología Pediátrica','Alergología e Inmunología','Bariatría','Coloproctología','Gastroenterología Endoscópica','Radiología Intervencionista','Spa'],
            value: null,
        }
        ),
        
    }
  </script>
<style>
    c{
      font-size: 10px;
      color: gray;
    }
    </style>
    