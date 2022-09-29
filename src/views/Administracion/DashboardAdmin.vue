<template>
    <v-container>
    <v-row
      row
      wrap
      class="mt-16"
    >
      <v-col xs12 sm12>
        <v-card 
        color="blue-grey darken-2" 
        class="white--text">
          <v-card-text primary-title class="headline mt-16">
            What Do You Need Now?
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
          <v-row>
        <v-col xs12 sm4 order-md2 order-sm1 pa-2>
          <v-card dark tile flat color="primary lighten-1" hover>
            <v-icon x-large>mdi-home</v-icon>
            <v-card-text class="headline">Drawings</v-card-text>

          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md3 order-sm2 pa-2>
          <v-card dark tile flat color="secondary lighten-1" hover>
            <v-icon x-large>mdi-file</v-icon>
            <v-card-text class="headline">Data</v-card-text>
          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md4 order-sm3 pa-2>
          <v-card dark tile flat color="green" hover>
              <v-icon x-large>mdi-doctor</v-icon>
            <v-card-text class="headline">Contacts</v-card-text>
          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md2 order-sm1 pa-2>
          <v-card dark tile flat color="blue lighten-1" hover>
            <v-icon x-large>mdi-home</v-icon>
            <v-card-text class="headline">Drawings</v-card-text>
          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md3 order-sm2 pa-2>
          <v-card dark tile flat color="orange lighten-1" hover>
            <v-icon x-large>mdi-file</v-icon>
            <v-card-text class="headline">Data</v-card-text>
          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md4 order-sm3 pa-2>
          <v-card dark tile flat color="green" hover>
              <v-icon x-large>mdi-doctor</v-icon>
            <v-card-text class="headline">Contacts</v-card-text>
          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md2 order-sm1 pa-2>
          <v-card dark tile flat color="blue lighten-1" hover>
            <v-icon x-large>mdi-home</v-icon>
            <v-card-text class="headline">Drawings</v-card-text>
          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md3 order-sm2 pa-2>
          <v-card dark tile flat color="orange lighten-1" hover>
            <v-icon x-large>mdi-file</v-icon>
            <v-card-text class="headline">Data</v-card-text>
          </v-card>
        </v-col>
        <v-col xs12 sm4 order-md4 order-sm3 pa-2>
          <v-card
            dark
            tile
            flat
            color="green"
            hover
          >
              <v-icon x-large>mdi-doctor</v-icon>
            <v-card-text class="text-h5">Contacts</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <panel-admi />
    </v-container>
</template>
<script>
  import PanelAdmi from '@/components/ComponentsAdmin/PanelAdmi.vue'
  export default {
    name: 'DashboardAdmin',
    components: {
      PanelAdmi,
    },
  }
</script>
