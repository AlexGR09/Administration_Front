<template>
     <v-container class="fluid text-center">
    <v-row>
      <v-col
      sm="12"
      >
        <v-card
        max-width="100%"
        color="primary"
        class="white--text mt-5"
        >
          <v-card-text
            primary-title
            class=" white--text text-h5"
          >
            Bienvenido (nombre de usuario)
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
          <v-row>
      <card-cuestionarios />
      <card-clientes />
      <card-usuarios />
      </v-row>
      <to-do-list />
      <panel-admi />
    </v-container>
</template>
<script>
  import PanelAdmi from '@/components/ComponentsAdmin/PanelAdmi.vue'
  import ToDoList from '@/components/ComponentsAdmin/ToDoList.vue'
  import CardCuestionarios from '@/components/ComponentsAdmin/CardCuestionarios.vue'
  import CardClientes from '@/components/ComponentsAdmin/CardClientes.vue'
  import CardUsuarios from '@/components/ComponentsAdmin/CardUsuarios.vue'
  export default {
    name: 'DashboardAdmin',
    components: {
      PanelAdmi,
      ToDoList,
      CardCuestionarios,
      CardClientes,
      CardUsuarios,
    },
  }
</script>
<style>
.main-row {
  padding: 15px;
}

.base-card {
  overflow-y: scroll;
  max-height: 80vh;
  height: 300px;
}

</style>
