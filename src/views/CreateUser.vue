<template>
    <v-container
        id="create-user-view"
        fluid
        tag="section"
        >
            <v-row justify="center">
                <v-col
                    cols="12"
                    md="3"
                >
                    <app-card class="mt-4 text-left">

                    <v-card-text class="text-left">
                        <h4 class="text-h4 mb-3 text--primary">
                            Datos formulario Pre-Cliente
                        </h4>
                        <v-list two-line>
                            <v-list-item-group
                            v-model="selected"
                            active-class="blue--text"
                            multiple
                            >
                            <template>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Nombre sugerido de usuario</v-list-item-title>
                                    <v-list-item-subtitle>JuanPerez</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Contraseña sugerida</v-list-item-title>
                                    <v-list-item-subtitle>VD5KA5I7PI</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Especialidad(es)</v-list-item-title>
                                    <v-list-item-subtitle>Cardiologia</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Nombre completo</v-list-item-title>
                                    <v-list-item-subtitle>Juan Perez Ocampo</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Teléfonos</v-list-item-title>
                                    <v-list-item-subtitle>9611112223</v-list-item-subtitle>
                                    <v-list-item-subtitle>9991238765</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Email</v-list-item-title>
                                    <v-list-item-subtitle>JuanPerez@gmail.com</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Fecha de nacimiento</v-list-item-title>
                                    <v-list-item-subtitle> 01/12/1990</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Genero</v-list-item-title>
                                    <v-list-item-subtitle>Masculino</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Ubicación</v-list-item-title>
                                    <v-list-item-subtitle>Tuxtla Gutierrez</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                            </template>
                            </v-list-item-group>
      </v-list>
                    </v-card-text>
                    </app-card>
      </v-col>
                <v-col
                cols="12"
                md="9"
                >
                <v-col
                cols="12"
                md="12"
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
                                            Información personal
                                        </v-stepper-step>
                                        <v-stepper-content step="1">
                                            <v-card>
                                            <v-row>
                                                <v-col
                                                cols="12"
                                                md="2"
                                            >
                                            <v-autocomplete
                                                :items="titulos"
                                                dense
                                                filled
                                                hide-details
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
                                                hide-details
                                                filled
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="3"
                                            >
                                            <v-text-field
                                                color="purple"
                                                hide-details
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
                                                hide-details
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
                                                hide-details
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
                                                hide-details
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
                                                hide-details
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
                                                hide-details
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
                                                hide-details
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
                                                hide-details
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
                                                hide-details
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
                                                hide-details
                                            />
                                            </v-col>
                                        </v-row>
                                        <v-btn
                                            color="primary"
                                            @click="e13 = 2"
                                            >
                                            Continue
                                            </v-btn>
                                        </br>
                                    </br>
                                        <v-divider></v-divider>
                                        </v-card>
                                        </v-stepper-content>
                                        <v-stepper-step
                                            step="2"
                                            complete
                                        >
                                            Datos de usuario
                                        </v-stepper-step>
                                        <v-stepper-content step="2">
                                            <v-row>
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
                                                md="6"
                                            >
                                            <v-file-input
                                                label="File input"
                                                filled
                                                hide-details
                                                ></v-file-input>
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
                                                label="Alcance"
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
                                                label="Tipo"
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                                <v-menu
                                                v-model="menu2"
                                                :close-on-content-click="false"
                                                :nudge-right="40"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="auto"
                                                >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-text-field
                                                    v-model="date"
                                                    hide-details
                                                    label="Fecha de nacimiento"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    v-model="date"
                                                    @input="menu2 = false"
                                                ></v-date-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="2"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Edad"
                                                filled

                                               hide-details
                                            />
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                md="6"
                                                >
                                                <p class="text-left">{{ radios || 'Genero' }}</p>
                                                <v-radio-group
                                                    v-model="row"
                                                    row
                                                >
                                                    <v-radio
                                                    label="Masculino"
                                                    value="radio-1"
                                                    ></v-radio>
                                                    <v-radio
                                                    label="Femenino"
                                                    value="radio-2"
                                                    ></v-radio>
                                                    <v-radio
                                                    label="Otros"
                                                    value="radio-3"
                                                    ></v-radio>
                                                </v-radio-group>
                                                </v-col>
                                            </v-row>
                                            <v-btn
                                            color="primary"
                                            @click="e13 = 3"
                                            >
                                            Continue
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
                                        </br>
                                    </br>
                                        <v-divider></v-divider>
                                        </v-stepper-content>
                                        <v-stepper-step
                                            step="3"
                                        >
                                            Datos fiscales
                                        </v-stepper-step>
                                        <v-stepper-content step="3">
                                           <v-row>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="RFC"
                                                filled
                                               hide-details
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="CURP"
                                                filled
                                               hide-details
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="4"
                                            >
                                            <v-text-field
                                                color="purple"
                                                label="Correo electrónico fiscal"
                                                filled
                                               hide-details
                                            />
                                            </v-col>
                                            <v-col
                                                cols="4"
                                                md="3"
                                                >
                                                <v-text-field
                                                    color="purple"
                                                    label="Tipo vialidad"
                                                    filled
                                                    hide-details
                                                />
                                                </v-col>
                                                <v-col
                                                    cols="4"
                                                    md="5"
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
                                                    md="2"
                                                    >
                                                    <v-text-field
                                                        color="purple"
                                                        label="Num Ext"
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
                                                        label="Num Int"
                                                        filled
                                                        hide-details
                                                    />
                                                </v-col>
                                                <v-col
                                                    cols="4"
                                                    md="3"
                                                    >
                                                    <v-text-field
                                                        color="purple"
                                                        label="Entre (vialidad)"
                                                        filled
                                                        hide-details
                                                    />
                                                </v-col>
                                                <v-col
                                                    cols="4"
                                                    md="5"
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
                                                    md="4"
                                                    >
                                                    <v-text-field
                                                        color="purple"
                                                        label="Y (vialidad)"
                                                        filled
                                                        hide-details
                                                    />
                                                </v-col>
                                                <v-col
                                                    cols="4"
                                                    md="5"
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
                                                    md="3"
                                                    >
                                                    <v-text-field
                                                        color="purple"
                                                        label="Colonia (tipo)"
                                                        filled
                                                        hide-details
                                                    />
                                                </v-col>
                                                <v-col
                                                    cols="4"
                                                    md="4"
                                                    >
                                                    <v-text-field
                                                        color="purple"
                                                        label="Colonia (nombre)"
                                                        filled
                                                        hide-details
                                                    />
                                                </v-col>
                                            <v-col
                                                cols="4"
                                                md="12"
                                            >
                                            <v-switch
                                                v-model="name"
                                                class="text-justify"
                                                :rules="nameRules"
                                                required
                                                :label="`Estoy de acuerdo con enviar mis datos en el entendimiento de que serán tratados con la total confidencialidad por Guía Salud y que no serán compartidos a terceros, ni revelados, a menos que haya una requisición jurídica de por medio.`"
                                                ></v-switch>
                                                </v-col>
                                           </v-row>
                                           <v-btn
                                                    color="primary"
                                                    @click="e13 = 2"
                                                    >
                                                    atras
                                                </v-btn>
                                                <v-divider
                                            vertical
                                            ></v-divider>
                                            <v-divider
                                            vertical
                                            ></v-divider>
                                            <v-divider
                                            vertical
                                            ></v-divider>
                                            <v-divider
                                            vertical
                                            ></v-divider>
                                                <v-btn
                                                    color="primary"
                                                    @click="e13 = 2"
                                                    >
                                                    Finalizar
                                                </v-btn>
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
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            e13: 1,
            titulos: ['Dr.', 'Dra.', 'Lic.', 'QFB', 'Ing'], 
            especialidades: ['Acupuntura', 'Alergología', 'Anatomopatología', 'Anestesiología', 'Angiología', 'Audiología', 'Cardiología', 'Cardiología Pediátrica', 'Cirugía Cardiovascular y Torácica', 'Cirugía de la Mano', 'Cirugía Estética y Cosmética', 'Cirugía General', 'Cirugía Maxilofacial', 'Cirugía Oncológica', 'Cirugía Pediátrica', 'Cirugía Plástica', 'Dermatología', 'Dermatología Pediátrica', 'Diabetología', 'Endocrinología', 'Endoscopía', 'Enfermería', 'Fisioterapia', 'Gastroenterología', 'Gastroenterología Pediátrica', 'Genética', 'Geriatría', 'Ginecología Oncológica', 'Ginecología y Obstetricia', 'Hematología', 'Hematología Pediátrica', 'Homeopatía', 'Infectología', 'Infectología Pediátrica', 'Inmunología', 'Laboratorios Análisis Clínicos', 'Logopedia', 'Terapia Complementaria', 'Medicina Crítica y Terapia Intensiva', 'Medicina del Deporte', 'Medicina del Trabajo', 'Medicina Estética', 'Medicina Familiar', 'Medicina General', 'Medicina Integrada', 'Medicina Interna', 'Medicina Nuclear', 'Naturismo', 'Nefrología', 'Nefrología pediátrica', 'Neonatología', 'Neumología', 'Neumología pediátrica', 'Neurocirugía', 'Neurofisiología', 'Neurología', 'Neurología pediátrica', 'Nutrición', 'Nutriología clínica', 'Obesidad y delgadez', 'Odontología', 'Oftalmología', 'Oftalmología pediátrica', 'Oncología', 'Oncología pediátrica', 'Optometrismo', 'Ortopedia', 'Ortopedia infantil', 'Otorrinolaringología', 'Patología clínica', 'Pediatría', 'Podiatría', 'Podología', 'Proctología', 'Psicoanálisis', 'Psicología', 'Psicopedagogía', 'Psiquiatría', 'Psiquiatría infantil', 'Quiropráctica', 'Radiología', 'Radioterapia', 'Rehabilitación y Medicina física', 'Reumatología', 'Sexología', 'Algología', 'Traumatología y Ortopedia', 'Urgenciología', 'Urología', 'Reumatología pediátrica', 'Urología pediátrica', 'Cirugía Torácica', 'Radiooncología', 'Epidemiología', 'Odontología pediátrica', 'Cirugía Bariátrica', 'Foniatría', 'Otorrinolaringología pediátrica', 'Patología bucal', 'Alergología Pediátrica', 'Alergología e Inmunología', 'Bariatría', 'Coloproctología', 'Gastroenterología Endoscópica', 'Radiología Intervencionista', 'Spa'],
            alcance: ['Cliente', 'Externo', 'Interno'], 
            tipo: ['Auxiliar publicitario', 'Médico', 'Propietario'], 
            value: null,
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                menu: false,
                modal: false,
                menu2: false,
                
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
