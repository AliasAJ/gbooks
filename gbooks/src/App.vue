<template>
  <div id="app">
    <v-app>
      <main>
        <v-toolbar
          fixed
          class="elevation-0"
          color="white"
          style="padding:20px 0 0  50px;"
        >
          <v-toolbar-title>
            <!-- <v-btn
              to="/"
              flat
              class="green--text"
            > -->
            <img
              width="150px"
              src="./assets/Gbook_combo.png"
            >
            <!-- </v-btn> -->
          </v-toolbar-title>
          <v-spacer />
          <!-- <v-btn
            to="/"
            dark
            tile
            flat
            color="green lighten-1"
          >
            Home
          </v-btn>
          <v-btn
            to="/books"
            dark
            tile
            flat
            color="green lighten-1"
          >
            Books
          </v-btn>
          <v-btn
            to="/about"
            dark
            tile
            flat
            color="green lighten-1"
          >
            About
          </v-btn> -->
        </v-toolbar>
        <router-view />
        <v-footer
          dark
          height="auto"
          xs10
        >
          <v-flex md12>
            <v-card
              flat
              tile
              class="green white--text text-xs-center"
            >
              <v-card-text>
                <v-btn
                  href="https://github.com/AliasAJ"
                  icon
                >
                  <v-icon
                    size="30px"
                  >
                    fab fa-github
                  </v-icon>
                </v-btn>
                <v-btn
                  href="https://www.linkedin.com/in/arthurbatesjr/"
                  icon
                >
                  <v-icon size="30px">
                    fab fa-linkedin
                  </v-icon>
                </v-btn>
              </v-card-text>
              <v-card-text class="white--text">
                THANK YOU DocNetwork for allowing me the opportunity to audition for your team!
              </v-card-text>
              <v-card-text class="white--text">
                &copy;2019 — <strong>Arthur Bates, Jr.</strong>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-footer>
      </main>
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Search from './components/Search.vue'
// import About from './components/About.vue'

export default {
  name: 'App',
  components: {
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
