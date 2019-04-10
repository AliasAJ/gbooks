<template>
  <v-flex
    d-inline
    xs12
    class="text-xs-center"
  >
    <v-container
      fluid
      fill-height
    >
      <v-layout
        flex
        align-center
        justify-center
      >
        <v-flex
          xs12
          sm10
          md8
          lg6
          class="text-xs-center"
        >
          <form
      
            id="bookSearchApp"
            class="text-xs-center"
            @submit.prevent="search()"
          >
            <v-text-field
              v-model="books.searchTerm"
              class="mt-5 text-xs-center"
              color="green lighten-1"
              label="What book are you looking for?"
            />
            <Press>
              <v-btn
                class="mt-3 mb-5"
                large
                outline
                color="green light-1"
                type="submit"
              >
                Search
              </v-btn>
            </Press>  
          </form> 
        </v-flex>
      </v-layout>
    </v-container>
    <v-container
      fluid
      fill-height
      justify-center
    >
      <ul>
        <li
          v-for="book in books.searchResults.items"
          :key="book.id"
        >
          <v-layout
            justify-center
          >
            <Press>
              <img
                :src="'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'"
                @click="redirect"
              >
            </Press>
          </v-layout>
          <div>
            <h4 class="black--text">
              {{ book.volumeInfo.title }}
            </h4>
            <h2
              v-if="book.volumeInfo.subtitle"
              class="black--text"
            >
              {{ book.volumeInfo.subtitle }}
            </h2>
            <h3
              v-if="book.volumeInfo.authors"
              class="black--text"
            >
              by {{ authors(book) }}
            </h3>
          </div>
        </li>
      </ul>
    </v-container>
  </v-flex>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import posed from 'vue-pose'

export default Vue.component('BookSearch', {
      components: {
      Press: posed.div({
      hoverable:true,
      pressable: true,
      init: { scale: 1 },
      press: { scale: 1.3 },
      hover: {scale: 1.1}

      }),

      Hover: posed.div({
      hoverable:true,
      init: { scale: 1 },
      hover: {scale: 1.2}
      }),
    },
  data: function() {
  return {
      books:{
      message:'',
      searchTerm: "",
      searchResults: []
    }};
},
    methods: {
    search() {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=` + this.books.searchTerm)
        .then(response => {
          this.books.searchResults = response.data;
          // console.log(this.books.searchResults);
        })
        .catch(error => (error));
    },
    redirect(e) {
      e.preventDefault();
     window.location.href=`https://books.google.com/ebooks?id=`+ this.book.id + `&dq=holmes&as_brr=4&source=webstore_bookcard`;
    },
    authors(book) {
      let authors = book.volumeInfo.authors;
      if (authors.length < 3) {
        authors = authors.join(" and ");
      } else if (authors.length > 2) {
        let lastAuthor = " and " + authors.slice(-1);
        authors.pop();
        authors = authors.join(", ");
        authors += lastAuthor;
      }
      return authors;
    }
  },
    template: "#bookSearchApp",
});
</script>
