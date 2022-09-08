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
            <v-card class="elevation-6 mt-9">
             <v-window v-model="step">
<!-- ---------------------------------------------------------------Iniciar sesion------------------------------------------------------------------- -->
                <v-window-item :value="1">
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
                            outlined
                            dense
                            color="#ef8f71"
                            autocomplete="false"
                           class="mt-16"
                          />
                          <v-text-field
                            label="Password"
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
                          <v-btn
                          color="#1dbec7"
                          dark
                          block
                          tile
                          >ACCEDER</v-btn>
                         <h5
                         class="text-center grey--text mt-4 mb-3"
                        >O ingresa usando</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn
                          depressed
                          outlined
                          color="grey"
                        >
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn
                        depressed
                        outlined
                        color="grey"
                        >
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn
                          depressed
                          outlined
                          color="grey"
                        >
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>
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
                        <v-btn
                          tile
                          outlined
                          dark
                          @click="step++"
                          >
                        SIGN UP</v-btn>
                      </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
<!-- ---------------------------------------------------------------Registrarse------------------------------------------------------------------- -->
                <v-window-item :value="2">
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                      class="blue rounded-br-xl"
                    >
                     <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h3 class="text-center ">Alredy Signed up?</h3>
                        <h6
                          class="text-center"
                        >Log in to your account so you can continue building and<br>  editing your onboarding flows</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                        tile
                        outlined
                        dark
                        @click="step--"
                        >
                        Log in</v-btn>
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
                            sm="8"
                          >
                           <v-row>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                            <v-text-field
                              label="First Name"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                            class="mt-4"
                            />
                           </v-col>
                           <v-col
                            cols="12"
                            sm="6"
                           >
                            <v-text-field
                            label="Last Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                          />
                           </v-col>
                           </v-row>
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           type="password"
                          />
                            <v-row>
                              <v-col
                                cols="12"
                                sm="7"
                                >
                                <v-checkbox
                                  label="I Accept AAE"
                                  class="mt-n1"
                                  color="blue"
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
                            color="blue"
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
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn
                          depressed
                          outlined
                          color="grey"
                        >
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn
                          depressed
                          outlined
                          color="grey"
                        >
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</div>
</template>

<script>
  export default {
    data: () => ({
      step: 1,
    }),
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
