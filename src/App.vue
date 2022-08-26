<template>
  <v-app>
    <SideBar />
    <v-main>
      <router-view>
        
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: 'App',
    setup() {
    },
    components: { SideBar },
    data: () => ({}),
};
</script>