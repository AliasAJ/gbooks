<template>
  <div class="hello">
    <v-card>
      <v-container
        fluid
        grid-list-xs
        fill-height
      >
        <v-layout align-center>
          <v-flex xs12>
            <v-card
              class="white--text"
              img="https://besthqwallpapers.com/img/original/47929/4k-android-green-and-yellow-google-chrome-material-design.jpg"
              style="min-height: 400px; margin:0 20px;"
            >
              <v-card-text class="text-sm-center">
                <h1>All the right books, in the right place.</h1>
                <p>
                  G-Books will help you find the perfect book for any mood.
                </p>
                <v-btn
                  class="text-xs-center"
                  to="/books"
                  large
                  outline
                  color="white"
                >
                  Search For Books
                </v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container
        fluid
        grid-list-xs
        style="min-height: 400px;"
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            d-flex
            xs12
            sm6
            md4
          >
            <v-card
              color="transparent"
              flat
              style="padding:50px 20px;"
            >
              <v-icon>search</v-icon>
              <v-card-title class="title justify-center">
                Ease of use
              </v-card-title>
              <v-card-text>You'll find the experience quite familiar. Each search result provides a link to its respective Google Books page.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            d-flex
            xs12
            sm6
            md4
          >
            <v-card
              color="transparent"
              flat
              style="padding:50px 20px;"
            >
              <v-icon>language</v-icon>
              <v-card-title class="title justify-center">
                A world of books
              </v-card-title>
              <v-card-text>Preview the Cover, Title, and Author. It may also be free to download a PDF copy per the author's permission</v-card-text>
            </v-card>
          </v-flex>
          <v-flex
            d-flex
            xs12
            sm12
            md4
          >
            <v-card
              color="transparent"
              flat
              style="padding:50px 20px;"
            >
              <v-icon>home</v-icon>
              <v-card-title class="title justify-center">
                Lorem
              </v-card-title>
              <v-card-text>We've created reference pages for every book so you can quickly find all kinds of relevant information: book reviews, web references, maps and more.</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
