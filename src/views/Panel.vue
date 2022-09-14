<template>
      <div>
          <v-col></v-col>
          <v-row>
          <v-col>
      <h1>Este es el panel de cliente</h1>
      </v-col>
    </v-row>
      <barra-cliente />
    </div>
</template>
<script>
  import BarraCliente from '@/components/BarraCliente.vue'
  export default {
    components: {
      BarraCliente,
    },
  }
</script>
