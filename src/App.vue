<template>
  <div id="app">
    <nav>
      <v-layout> 
        <img src="./assets/logo.png" alt="" height="35px">
        <v-flex xs12>
          <router-link to="/">Inicio</router-link> |
          <router-link to="/about">Acceso</router-link>
        </v-flex>
      </v-layout>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: #B2D4CC;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #3097C3;
    }
  }
}
</style>