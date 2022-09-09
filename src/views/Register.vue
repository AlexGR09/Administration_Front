<template>
  <div>
    <v-container>
      <v-row
        align="center"
        justify="center"
        >
          <v-col
            cols="12"
            sm="12"
          >
          <v-card
          class="elevation-6 mt-9"
          >
          <v-row>
                    <v-col
                      cols="12"
                      md="6"
                      class="fondito rounded-br-xl"
                    >
                     <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h1 class="text-center ">¿Ya tienes una cuenta?</h1>
                        <h3
                          class="text-center"
                        ><br>Let's get you all set up so you can start creating your your first onboarding experience</h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                        tile
                        outlined
                        dark
                        href="/"
                        >
                        Iniciar sesión</v-btn>
                      </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Sign Up for an Account</h4>
                        <h6
                          class="text-center  grey--text "
                        >Let's get you all set up so you can start creatin your <br>
                        first onboarding experiance</h6>
                        <v-row
                          align="center"
                          justify="center"
                        >
                          <v-col
                            cols="12"
                            sm="12"
                          >
                           <v-row>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                            <v-text-field
                              label="Nombre de usuario"
                              outlined
                              hide-details
                              dense
                              color="#ef8f71"
                              autocomplete="false"
                            class="mt-4"
                            />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                            <v-text-field
                            label="Contraseña"
                            outlined
                            dense
                            hide-details
                            color="#ef8f71"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="12"
                           >
                          <v-text-field
                            label="Correo electrónico"
                            outlined
                            dense
                            hide-details
                            color="#ef8f71"
                            autocomplete="false"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="12"
                           >
                          <v-text-field
                            label="Nombre(es)"
                            outlined
                            hide-details
                            dense
                            color="#ef8f71"
                            autocomplete="false"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                          <v-text-field
                            label="Apellido paterno"
                            outlined
                            hide-details
                            dense
                            color="#ef8f71"
                            autocomplete="false"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                          <v-text-field
                            label="Apellido materno"
                            outlined
                            dense
                            hide-details
                            color="#ef8f71"
                            autocomplete="false"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                          <v-text-field
                            label="Teléfono personal"
                            outlined
                            dense
                            hide-details
                            color="#ef8f71"
                            autocomplete="false"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                          <v-autocomplete
                            label="Género"
                            outlined
                            v-model="value"
                            :items="items"
                            dense
                            hide-details
                            color="#ef8f71"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="8"
                           >
                           <v-menu
                              ref="menu"
                              v-model="menu"
                              :close-on-content-click="false"
                              :return-value.sync="date"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  v-model="date"
                                  dense
                                  outlined
                                  label="Fecha de nacimiento"
                                  prepend-icon="mdi-calendar"
                                  readonly
                                  id="fechaNacimiento"
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="date"
                                no-title
                                id="fechaNacimiento"
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menu = false"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.menu.save(date)"
                                >
                                  OK
                                </v-btn>
                              </v-date-picker>
                            </v-menu>
                           </v-col>
                           <v-col
                            cols="12"
                            sm="4"
                           >
                          <v-text-field
                            label="Edad"
                            outlined
                            dense
                            hide-details
                            color="#ef8f71"
                            autocomplete="false"
                          />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                           </v-col>
                           </v-row>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="7"
                                >
                                <v-checkbox
                                  label="I Accept AAE"
                                  class="mt-n1"
                                  color="#ef8f71"
                                ></v-checkbox>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="5"
                              >
                                <span
                                class="text-caption blue--text ml-n4"
                                >
                                Terms &Conditions</span>
                              </v-col>
                            </v-row>
                          <v-btn
                            color="#1dbec7"
                            dark
                            block
                            tile
                          >Sign up</v-btn>
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Sign up using</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                        <v-btn
                          depressed
                          outlined
                          color="grey"
                        >
                          <v-icon color="red">mdi-google</v-icon>
                        </v-btn>
                        <v-btn
                          depressed
                          outlined
                          color="grey"
                        >
                          <v-icon color="blue">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn
                          depressed
                          outlined
                          color="grey"
                        >
                          <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                  </v-row>
          </v-card>
          </v-col>
      </v-row>
    </v-container>
    <logbar />
  </div>
</template>
<script>
  import logbar from '@/components/logbar.vue'
  export default {
    data: () => ({
      activePicker: null,
      date: null,
      menu: false,
      items: ['Femenino', 'Masculino', 'Otros'],
      value: null,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
    components: {
      logbar,
    },
    props: {
      source: String,
    },
  }
</script>

<style scoped>
  .fondito{
    background: #1dbec7;
  }

.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
