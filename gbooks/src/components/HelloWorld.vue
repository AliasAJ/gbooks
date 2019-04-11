<template>
  <div class="hello">
    <v-card>
      <v-parallax
        style="height:100%; padding-top:2%"
        src="https://img3.akspic.com/image/29342-line-grass-color-green-leaf-2560x1600.jpg"
      >
        <v-container
          fluid
          fill-height
        >
          <v-layout align-center>
            <v-flex
              xs12
              class="mt-5 mb-5"
            >
              <v-card
                color="transparent"
                class=" white--text"
                flat
              >
                <v-card-text class=" display-1 text-sm-left">
                  <parallax-element
                    class="text-container"
                    :parallax-strength="-10"
                    :type="'depth'"
                  >
                    <!-- <h1

                      class=" title font-weight-bold mb-5"
                    >
                      Find the book you love.
                    </h1>
                    <h1

                      class=" display-2 font-weight-bold mb-5"
                    >
                      Find the book you love.
                    </h1> -->
                    <h1
                      class=" display-4 font-weight-bold mb-5"
                    >
                      Find the book you love.
                    </h1>
                    <p class="font-weight-regular">
                      G-Books helps you find a book for any mood.
                    </p>
                  </parallax-element>
                </v-card-text>
              </v-card>
              <Press>
                <v-btn
                  class="align-right mt-5"
                  href="#search"
                  large
                  outline
                  block
                  color="white"
                >
                  Search For Books
                </v-btn>
              </Press>
            </v-flex>
            <!-- <parallax-container class="horizontal-card card-center">
              <parallax-element
                class="background-image"
                :parallax-strength="1.5"
                :type="'depth'"
              >
                <img
                  width="400px"
                  style="margin:auto;"
                  src="../assets/Gbook_mark.png"
                >
              </parallax-element>
            </parallax-container> -->
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
              style="padding:15% 20px;"
            >
              <v-icon color="rgb(120, 194, 23)">
                search
              </v-icon>
              <v-card-title
                style="color:rgb(120, 194, 23)"
                class="title justify-center"
              >
                Ease of use
              </v-card-title>
              <v-card-text class="body-2">
                You'll find this experience familiar. Just search for a title and the Google Books API will provide some items for you.
              </v-card-text>
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
              style="padding:15% 20px;"
            >
              <v-icon color="rgb(120, 194, 23)">
                language
              </v-icon>
              <v-card-title
                style="color:rgb(120, 194, 23)"
                class=" title justify-center"
              >
                A world of books
              </v-card-title>
              <v-card-text class="body-2">
                Preview the Cover, Title, and Author. It may also be free to download a PDF copy per the author's permission
              </v-card-text>
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
              style="padding:15% 20px;"
            >
              <v-icon color="rgb(120, 194, 23)">
                favorite
              </v-icon>
              <v-card-title
                style="color:rgb(120, 194, 23)"
                class=" title justify-center"
              >
                Some of your favorites
              </v-card-title>
              <v-card-text class="body-2">
                Click the cover and you'll find a reference page for every book so you can quickly find all kinds of relevant information.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container
        fluid
        grid-list-xs
        style="padding:24px 0"
      >
        <a id="search" />
        <v-layout>
          <v-flex xs12>
            <v-card
              flat
            >
              <v-parallax
                src="https://img3.akspic.com/image/29342-line-grass-color-green-leaf-2560x1600.jpg"
                height="100"
              >
                <v-card-text
                  fullwidth
                  class=" text-sm-center pt-5"
                >
                  <h1 class="mb-4 font-weight-light display-1">
                    Give the search a try
                  </h1>
                </v-card-text>
              </v-parallax>
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
      hover: {scale: 1.1, boxShadow:'0px 5px 10px rgb(168, 234, 76'}

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
