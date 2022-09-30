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
          Personal data
        </v-tab>
        <v-tab>
          Account settings
        </v-tab>
        <v-tab>
          User account
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
              Personal data
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-card
      class="mx-auto"
      max-width="434"
      tile
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row
          align="end"
          class="fill-height"
        >
          <v-col
            align-self="start"
            class="pa-0"
            cols="12"
          >
            <v-avatar
              class="profile"
              color="grey"
              size="164"
              tile
            >
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Marcus Obrien
                </v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
                <v-text-field
                  label="Firstname"
                ></v-text-field>
                <v-text-field
                  label="Lastname"
                ></v-text-field>
                <v-text-field
                  label="Email"
                ></v-text-field>
                <v-btn color="primary">Save personal data</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
              Language setting
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-select
                  solo
                  :items="['English', 'German']"
                  label="Language"
                ></v-select>
                <v-btn color="primary">Save account settings</v-btn>
              </v-form>
             </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title>
              Account setting
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
                <v-btn color="primary">Save new password</v-btn>
              </v-form>
              </v-card-text>
           </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
</template>
<script>
  export default {
    name: 'CardPerfil',
  }
</script>
