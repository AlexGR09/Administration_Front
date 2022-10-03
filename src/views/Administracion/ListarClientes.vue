<template>
  <div>
    <v-card
      max-width="100%"
      class="mx-auto mt-15"
    >
      <v-toolbar
        color="cyan"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Lista de clientes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>
          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>
          <v-list-item
            v-else
            :key="item.title"
          >
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-dialog
                v-model="dialog"
                max-width="800px"
              >
        <template v-slot:activator="{ on, attrs }">
           <v-btn
            icon
                  v-bind="attrs"
            v-on="on"
            >
              <v-icon color="secondary">mdi-plus-circle</v-icon>
            </v-btn>
        </template>
        <card-perfil />
      </v-dialog>
          </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
    <br />
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
    <panel-admi />
  </div>
</template>
<script>
  import PanelAdmi from '@/components/ComponentsAdmin/PanelAdmi.vue'
  import CardPerfil from '@/components/ComponentsAdmin/CardPerfil.vue'
  import axios from 'axios'
  export default {
    characters: [],
    components: {
      PanelAdmi,
      CardPerfil,
    },
    data: () => ({
      page: 1,
      characters: [],
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: '<span class="text--primary">Ali Connors</span> &mdash; Ill be in your neighborhood doing errands this weekend. Do you want to hang out?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: '<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but Im out of town this weekend.',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: '<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but Im out of town this weekend.',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
      ],
    }),
    mounted () {
      console.log('verificando')
      this.getTodos()
    },
    methods: {
      getTodos () {
        console.log('peticion GET')
        axios.get('http://127.0.0.1:8000/api/test')
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
