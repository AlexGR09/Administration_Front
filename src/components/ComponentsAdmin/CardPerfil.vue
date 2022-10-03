<template>
    <v-card>
      <v-toolbar
        flat
        color="primary"
        dark
      >
        <v-toolbar-title>Profile settings</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab>
          Datos de cliente
        </v-tab>
        <v-tab>
          Datos generales de usuario
        </v-tab>
        <v-tab>
          Documentación oficial
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
              Datos de cliente
            </v-card-title>
            <v-card-text>
              <v-form
              v-for="character in characters"
              :key="character.id"
              >
        <v-row
          align="center"
        >
          <v-col class="py-0">
            <v-list-item
              align="center"
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
          <v-col
            align-self="center"
            class="pa-0 mx-center"
            cols="12"
          >
          <v-avatar
              class="profile  mt-1"
              color="grey"
              size="164"
            >
              <v-img
              :src="character.foto"
              ></v-img>
            </v-avatar>
          </v-col>
                <v-list-item-subtitle class="black--text"> {{ character.titulo}} </v-list-item-subtitle>
                <v-list-item-title class="text-h5 black--text">
                 {{ character.user.nombre}}
                </v-list-item-title>
                <v-list-item-title class="text-h6 black--text">
                 {{ character.user.apellidopaterno}} {{ character.user.apellidomaterno}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
    <v-row>
      <v-col
        md="3"
      >
        <v-autocomplete
          :items="titulo"
          filled
          hide-details
          :value="character.titulo"
          label="Titulo"
        ></v-autocomplete>
      </v-col>
      <v-col
        md="9"
      >
        <v-text-field
          filled
          hide-details
          label="CURP"
          :value="character.curp"
        ></v-text-field>
    </v-col>
    <v-col
      md="6"
    >
      <v-autocomplete
        :items="tipotel"
        :value="character.tipotelefono"
        filled
        hide-details
        label="Tipo teléfono"
      ></v-autocomplete>
    </v-col>
    <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Teléfono"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="12"
    >
      <v-file-input
        label="Foto de perfil"
        filled
        hide-details
      ></v-file-input>
  </v-col>
</v-row>
                <v-btn color="primary">Actualizar datos</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
              Datos generales de usuario
            </v-card-title>
            <v-card-text>
              <v-form
              v-for="character in characters"
              :key="character.id"
              >
        <v-row
          align="center"
        >
          <v-col class="py-0">
            <v-list-item
              align="center"
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
          <v-col
            align-self="center"
            class="pa-0 mx-center"
            cols="12"
          >
          <v-avatar
              class="profile  mt-1"
              color="grey"
              size="164"
            >
              <v-img
              :src="character.ubicacion.imagenubicacion"
              ></v-img>
            </v-avatar>
          </v-col>
                <v-list-item-subtitle class="black--text"> Tipo de ubicacion </v-list-item-subtitle>
                <v-list-item-title class="text-h5 black--text">
                 Nombre de ubicación
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
    <v-row>
      <v-col
        md="3"
      >
        <v-autocomplete
          :items="Tipo"
          filled
          hide-details
          :value="character.titulo"
          label="Titulo"
        ></v-autocomplete>
      </v-col>
      <v-col
        md="9"
      >
        <v-text-field
          filled
          hide-details
          label="Nombre ubicación"
          :value="character.curp"
        ></v-text-field>
    </v-col>
    <v-col
      md="6"
    >
      <v-autocomplete
        :items="tipotel"
        :value="character.tipotelefono"
        filled
        hide-details
        label="Aviso de funcionamiento COFEPRIS"
      ></v-autocomplete>
    </v-col>
    <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Aviso de publicidad COFEPRIS"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Email"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Teléfono citas"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Tipo teléfono"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Teléfono"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Tipo de vialidad"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Nombre de vialidad"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="No. Ext."
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="No. Int."
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Aviso de publicidad COFEPRIS"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="6"
    >
      <v-text-field
        :value="character.telefonocliente"
        label="Aviso de publicidad COFEPRIS"
        filled
        hide-details
      ></v-text-field>
  </v-col>
  <v-col
      md="12"
    >
      <v-file-input
        :value="character.telefonocliente"
        label="Aviso de publicidad COFEPRIS"
        filled
        hide-details
      ></v-file-input>
  </v-col>
</v-row>
                <v-btn color="primary">Actualizar datos</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
              Documentación
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Username"
                  disabled
                ></v-text-field>
                <v-text-field
                  label="Current password"
                  type="password"
                  append-icon="mdi-eye-off"
                ></v-text-field>
                <v-text-field
                  label="New password"
                  type="password"
                  append-icon="mdi-eye-off"
                ></v-text-field>
                <p class="helper">
                  Password strength
                </p>
                <v-text-field
                  label="Confirm password"
                  type="password"
                  append-icon="mdi-eye-off"
                ></v-text-field>
                <v-btn color="primary">Guardar datos</v-btn>
              </v-form>
              </v-card-text>
           </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        titulo: ['Dr.', 'Dra.', 'Lic.', 'QFB', 'Ing'],
        tipotel: ['Móvil', 'Casa', 'Trabajo'],
        characters: [],
      }
    },
    name: 'CardPerfil',
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
            this.characters = res.data.data
          })
          .catch(e => {
            console.log(e)
          })
      },
    },
  }
</script>
