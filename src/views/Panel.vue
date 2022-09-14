<template>
      <div>
          <v-col></v-col>
          <v-row>
          <v-col>
      <h1>Este es el panel de cliente</h1>
      </v-col>
    </v-row>
      <barra />
    </div>
</template>
<script>
  import Barra from '@/components/Barra.vue'
  export default {
    components: {
      Barra,
    },
  }
</script>
