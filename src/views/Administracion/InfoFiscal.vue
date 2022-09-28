<template>
  <div>
    <v-container
      id="create-user-view"
      fluid
      tag="section"
    >
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <v-col
              cols="12"
              md="11"
            >
              <v-col
                class="mt-5"
                cols="12"
                md="12"
              >
                <v-card
                  class="mx-auto"
                  max-width="1244"
                  outlined
                >
                  <v-card-actions>
                    <material-card
                      color="primary"
                      icon="mdi-home-map-marker"
                    >
                      <template #title>
                        Nuevo establecimiento — <small class="text-body-1">Completa con los nuevos datos</small>
                      </template>
                      <v-form>
                        <v-container class="py-0">
                          <v-row>
                            <v-col
                              cols="4"
                              md="4"
                            >
                              <v-autocomplete
                                :item="clientes"
                                color="purple"
                                label="Razón social"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="4"
                            >
                              <v-text-field
                                color="purple"
                                label="RFC"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="4"
                            >
                              <v-text-field
                                color="purple"
                                label="CURP"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="4"
                            >
                              <v-text-field
                                color="purple"
                                label="Correo electrónico fiscal"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="3"
                            >
                              <v-text-field
                                color="purple"
                                label="Tipo vialidad"
                                filled
                                hide-details
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="5"
                            >
                              <v-text-field
                                color="purple"
                                label="Nombre vialidad"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="2"
                            >
                              <v-text-field
                                color="purple"
                                label="Num Ext"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="2"
                            >
                              <v-text-field
                                color="purple"
                                label="Num Int"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="3"
                            >
                              <v-text-field
                                color="purple"
                                label="Entre (vialidad)"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="5"
                            >
                              <v-text-field
                                color="purple"
                                label="Nombre vialidad"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="3"
                            >
                              <v-text-field
                                color="purple"
                                label="Y (vialidad)"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="9"
                            >
                              <v-text-field
                                color="purple"
                                label="Nombre vialidad"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="3"
                            >
                              <v-text-field
                                color="purple"
                                label="Colonia (tipo)"
                                filled
                              />
                            </v-col>
                            <v-col
                              cols="4"
                              md="9"
                            >
                              <v-text-field
                                color="purple"
                                label="Colonia (nombre)"
                                filled
                              />
                            </v-col>
                            <v-btn
                              color="primary"
                              @click="e13 = 2"
                            >
                              Finalizar
                            </v-btn>
                          </v-row>
                        </v-container>
                      </v-form>
                    </material-card>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <panel-admi />
  </div>
</template>
<script>
  import PanelAdmi from '@/components/ComponentsAdmin/PanelAdmi.vue'
  export default {
    name: 'infoFiscal',
    components: {
      PanelAdmi,
    },
  }
</script>
