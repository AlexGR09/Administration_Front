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
                        <router-link
                          style="text-decoration: none;
                          color: inherit;"
                          to="/"
                          ><v-btn
                            tile
                            outlined
                            dark
                            >
                          INICIAR SESIÓN</v-btn>
                        </router-link>
                      </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-card-text class="mt-12">
                        <h2
                          class="text-center"
                        >Registrate como cuenta nueva</h2>
                        <h5
                          class="text-center  grey--text "
                        >Empecemos registrando tus datos para que puedas <br>
                        vivir la experiencia</h5>
                        <form
                        action
                        class="form"
                        @submit.prevent="register"
                        >
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
                              v-model="username"
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
                            v-model="password"
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
                            v-model="email"
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
                            v-model="name"
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
                            v-model="appa"
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
                            v-model="apma"
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
                            v-model="phone"
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
                            v-model="genero"
                            outlined
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
                            v-model="age"
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
                                  label="Acepto los terminos y condiciones"
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
                            <router-link
                              style="text-decoration: none;
                              color: inherit"
                              to="/panel"
                              >
                              <v-btn
                                color="#1dbec7"
                                dark
                                block
                                tile
                              >Registrarse</v-btn>
                            </router-link>
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >O ingresa usando</h5>
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
                        </form>
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
  import auth from '@/logic/auth'
  import logbar from '@/components/logbar.vue'
  export default {
    data: () => ({
      activePicker: null,
      menu: false,
      items: ['Femenino', 'Masculino', 'Otros'],
      value: null,
      /* username: '', */
      password: '',
      email: '',
      /*
      name: '',
      appa: '',
      apma: '',
      phone: '',
      genero: '',
      date: '',
      age: '', */
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      register () {
        /*  console.log(this.username);
      console.log(this.password);
      console.log(this.email);
      console.log(this.name);
      console.log(this.appa);
      console.log(this.apma);
      console.log(this.phone);
      console.log(this.genero);
      console.log(this.date);
      console.log(this.age); */
        auth.register(this.email, this.password).then(response => {
          console.log(response)
        })
      },
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
