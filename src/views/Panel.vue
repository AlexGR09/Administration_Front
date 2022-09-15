<template>
  <div>
    <v-row>
      <v-col>
        <vs-card type="3">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <v-img
              :src="
                require('@/assets/pricing.jpg')"
            />
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #interactions>
          </template>
        </vs-card>
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
  Vue.use(Vuesax, {
    // options here
  })
  export default {
    components: {
      BarraCliente,
    },
  }
</script>
