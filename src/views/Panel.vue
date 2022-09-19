<template>
  <div>
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-col></v-col>
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
          
              <v-card-title>
                Top western road trips
              </v-card-title>
          
              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>
          
              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>
          
                <v-spacer></v-spacer>
          
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
          
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
          
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
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

  export default{
    name: 'panel',
    components:{
      BarraCliente,
    },

    data() {
      return {
        character: []
      }
    },

    mounted() {
      console.log('verificando');
      this.getTodos();
    },
    methods: {
      getTodos(){
        console.log('peticion GET')
        axios.get('http://127.0.0.1:8000/api/showCliente')
        .then(res => {
          console.log(res)
        this.character = res.data.data
      })
      .catch(e =>{
        console.log(e);
      })
      },
    }
  }
</script>
