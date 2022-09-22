<template>
  <div>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-col></v-col>
            <v-card
              class="mx-auto mt-5"
              max-width="944"
              height="195px"
              v-for="character in characters" :key="character.id"
              
            ><v-row >
               <v-col
                 cols="12"
                 md="2"
              >
                 <v-avatar
                   class="ml-2 mx-auto"
                   color="#29c1cc"
                   tile
                   size="150"
                 >
                  <v-icon
                  dark
                  size="140"
                  >
                  mdi-doctor
                  </v-icon>
      </v-avatar>
              </v-col>
              <v-col
              cols="12"
                md="7"
                >
              <v-card-title>
                <h1>{{character.nombre}}</h1>
              </v-card-title>
              <v-card-subtitle>
                <h3 class>{{character.apellidopaterno}}</h3>
              </v-card-subtitle>
              </v-col>
              <v-col>
              <v-card-title>
                <h3>ID:</h3>
              </v-card-title>
              <v-card-subtitle>
                <h5>{{character.id}}</h5>
              </v-card-subtitle>
              <v-card-title>
                <h3>Nombre de usuario:</h3>
              </v-card-title>
              <v-card-subtitle>
              <h5>{{character.username}}</h5>

              </v-card-subtitle>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              </v-col>
            </v-row>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
            <!-- -------------------------------------------------------------------------------------------- -->

              <!-- <vs-card
              fixed-height="true"
              class="d-flex justify-center mb-6"
              type="3"
              >
                <template #title>
                  <h3>Juán Pérez Rodriguez</h3>
                </template>
                <template #img>
                  <v-avatar
                    color="#29c1cc"
                    tile
                    size="450"
                >
                  <v-icon
                  size="200"
                  dark
                  >
                  mdi-doctor
                  </v-icon>
      </v-avatar>
                </template>
                <template
                #text
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </template>
                <template #interactions>
                </template>
              </vs-card> -->
      </v-col>
        </v-row>
      </v-col>
    </v-row>
    <barra-cliente />
  </div>
</template>
<script>
  import BarraCliente from '@/components/BarraCliente.vue'
  import Vue from 'vue'
  import Vuesax from 'vuesax'
  import 'vuesax/dist/vuesax.css'
  import axios from 'axios'
  Vue.use(Vuesax, {
    // options here
  })
  /*   export default {
    data: () => ({
      return {
        character = []
    },
    show: false,
  }),
    components: {
      BarraCliente,
    },

  mounted(){
    console.log('datos');
    this.getDatos();
  },
  methods: {
    getDatos() {
      axios.get('http://127.0.0.1:8000/api/showCliente')
      .then(res=>)
    }
  }, */

  export default {
    name: 'panel',
    components: {
      BarraCliente,
    },

    data () {
      return {
        show: false,
        characters: [],
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
