<template>
  <div>
  <v-container>
    <form @submit.prevent="iniciarSesion">
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="10"
        >
          <v-card class="elevation-6 mt-9">
<!-- ---------------------------------------------------------------Iniciar sesion------------------------------------------------------------------- -->
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                      <v-card-text class="mt-16">
                        <h2
                          class="text-center"
                        >Iniciar sesión</H2>
                        <h5
                          class="text-center  grey--text"
                        >Ingresa con tu información para empezar a usar <br>la aplicación</h5>
                        <form
                        action
                        class="form"
                        @submit.prevent="login"
                        >
                        <v-row
                          align="center"
                          justify="center"
                        >
                          <v-col
                            cols="12"
                            sm="10"
                          >
                          <v-text-field
                            label="Email"
                            v-model="email"
                            outlined
                            dense
                            color="#ef8f71"
                            autocomplete="false"
                           class="mt-16"
                          />
                          <v-text-field
                            label="Password"
                            v-model="password"
                            outlined
                            dense
                            color="#ef8f71"
                            autocomplete="false"
                            type="password"
                          />
                            <v-row>
                              <v-col
                                cols="12"
                                sm="7"
                                >
                                <v-checkbox
                                  label="Remember Me"
                                  class="mt-n1"
                                  color="black"
                                ></v-checkbox>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="5"
                              >
                                <span
                                class="text-caption blue--text"
                                >¿Olvidaste tu contraseña?</span>
                              </v-col>
                            </v-row>
                           <!--  <router-link
                          style="text-decoration: none;
                          color: inherit"
                          to="/panel"
                          >
                          <v-btn
                          color="#1dbec7"
                          dark
                          block
                          tile
                          >ACCEDER</v-btn>
                        </router-link> -->
                        <v-btn type="submit">ACCEDER</v-btn>
                         <h5
                         class="text-center grey--text mt-4 mb-3"
                        >O ingresa usando</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
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
                        <!-- <p
                        v-if="error"
                        class="error"
                        >Has introducido mal el email o la contraseña.</p>
                        <input
                        class="form-submit"
                        type="submit"
                        value="Login"
                        > -->
                        </form>
                      </v-card-text>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                      class="fondito rounded-bl-xl"
                    >
                    <div style="text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h1 class="text-center ">¿Aún no tienes una cuenta?</h1>
                        <h3
                          class="text-center"
                        ><br>Let's get you all set up so you can start creating your your first onboarding experience</h3>
                      </v-card-text>
                      <div class="text-center">
                        <router-link
                          style="text-decoration: none;
                          color: inherit;"
                          to="/registro"
                          ><v-btn
                            tile
                            outlined
                            dark
                            >
                          REGISTRATE</v-btn>
                        </router-link>
                      </div>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
      </v-row>
    </form>
  </v-container>
  <logbar />
</div>
</template>

<script>
  import logbar from '@/components/logbar.vue'
  export default {
    data: () => ({
      email: '',
      password: '',
    }),
    components: {
      logbar,
    },
    props: {
      source: String,
    },
    methods: {
      /*  async iniciarSesion()
      {
        var payload = {
          email: this.email,
          password: this.password
        }
        console.log(payload)
      } */
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
