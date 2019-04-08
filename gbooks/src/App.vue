<template>
  <div id="app">
          <v-toolbar fixed class="elevation-0" color="white">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>G-Books</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn to="/" dark tile flat color="green lighten-1">Home</v-btn>
      <v-btn to="/books" dark tile flat color="green lighten-1">Books</v-btn>
      <v-btn dark tile flat color="green lighten-1">About</v-btn>
  </v-toolbar>
   <router-view></router-view>
         <v-footer
    dark
    height="auto"
  >
      <v-flex md12>
    <v-card
      flat
      tile
      class="green lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        THANK YOU DocNetwork for allowing me to audition for your stellar team!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>Arthu Bates, Jr.</strong>
      </v-card-text>
    </v-card>
      </v-flex>
  </v-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Search
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
