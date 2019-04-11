<template>
  <div class="hello">
    <v-card>
      <v-parallax
        height="500"
        src="https://www.setaswall.com/wp-content/uploads/2018/02/Green-Background-27-1920x1200.jpg"
      >
        <v-container
          fluid
          fill-height
        >
          <v-layout align-center>
            <v-flex
              lg7
              md7
              xs12
              class="mt-5 mb-5"
            >
              <v-card
                color="transparent"
                class=" green--text pt-5 pb-5"
                flat
                style="min-height: 400px;"
              >
                <v-card-text class=" title text-sm-center pt-5">
                  <parallax-element
                    class="text-container"
                    :parallax-strength="-10"
                    :type="'depth'"
                  >
                    <h1 class="mb-4">
                      Find the book you love.
                    </h1>
                    <v-divider class="green mb-4" />
                    <p>
                      G-Books will help you find the perfect book for any mood.
                    </p>
                  </parallax-element>
                </v-card-text>
                <Press>
                  <v-btn
                    class="text-xs-center mt-3 mb-5"
                    href="#search"
                    large
                    outline
                    color="green"
                  >
                    Search For Books
                  </v-btn>
                </Press>
              </v-card>
            </v-flex>
            <parallax-container class="horizontal-card">
              <parallax-element
                class="background-image"
                :parallax-strength="-1"
                :type="'depth'"
              >
                <img
                  width="400px"
                  style="margin:auto;"
                  src="../assets/Gbook_mark.png"
                >
              </parallax-element>
            </parallax-container>
          </v-layout>
        </v-container>
      </v-parallax>
      <!-- <v-container
        fluid
        grid-list-xs
        fill-height
      >
        <v-layout align-center>
          <v-flex xs12>
            <v-card
              class=" white--text pt-5"
              flat
              img="https://besthqwallpapers.com/img/original/47929/4k-android-green-and-yellow-google-chrome-material-design.jpg"
              style="min-height: 400px; margin:0 20px;"
            >
              <v-card-text class=" title text-sm-center pt-5">
                <h1 class="mb-3">
                  Your favorite book in one easy-to-use platform.
                </h1>
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
      </v-container> -->
      <v-container
        fluid
        grid-list-xs
        fill-height
      >
        <v-layout
          row
          wrap
          align-center
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
              style="padding:60px 20px 20px;"
            >
              <v-icon class="green--text">
                search
              </v-icon>
              <v-card-title class=" green--text title justify-center">
                Ease of use
              </v-card-title>
              <v-card-text>You'll find this experience familiar. Just search for a title and the Google Books API will provide some items for you.</v-card-text>
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
              style="padding:60px 20px 20px;"
            >
              <v-icon class="green--text">
                language
              </v-icon>
              <v-card-title class=" green--text title justify-center">
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
              style="padding:60px 20px 20px;"
            >
              <v-icon class="green--text">
                import_contacts
              </v-icon>
              <v-card-title class=" green--text title justify-center">
                Some of your favorites
              </v-card-title>
              <v-card-text>Click the cover and you'll find a reference page for every book so you can quickly find all kinds of relevant information.</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container
        fluid
        grid-list-xs
        style="padding:24px 0"
      >
        <a name="search" />
        <v-layout>
          <v-flex xs12>
            <v-card
              flat
            >
              <v-card-text
                fullwidth
                class="green white--text Headline text-sm-center pt-5"
              >
                <h1 class="mb-4">
                  Give our search a try
                </h1>
              </v-card-text>
              <v-flex
                xs10
                sm10
                md6
                class="text-sm-center"
              />
              <BookSearch />
            </v-card>        
          </v-flex>
        </v-layout>
      </v-container>
      <!-- results section -->
      <!-- <Search /> -->
    <!-- end results -->
    </v-card>
  </div>
</template>

<script>
import posed from 'vue-pose';
import BookSearch from './Search.vue';


export default {

  name: 'HelloWorld',
  components: {
    Press: posed.div({
      hoverable:true,
      pressable: true,
      init: { scale: 1 },
      press: { scale: 1.3 },
      hover: {scale: 1.1}

      }),
      BookSearch

      }
};
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

.box {
  width: 100px;
  height: 100px;
  background: #54E365;
}
</style>
