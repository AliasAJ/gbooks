<template>
  <section>
    <form
      id="bookSearchApp"
      @submit.prevent="search()"
    >
      <v-text-field
        v-model="books.searchTerm"
        class="text-sm-center"
        color="white"
        label="What book are you looking for?"
      />
      <Press>
        <v-btn
          class="text-xs-center mt-3 mb-5"
          large
          outline
          color="white"
          type="submit"
        >
          Search
        </v-btn>
      </Press>  
    </form> 
    <div>
      <ul>
        <li
          v-for="book in books.searchResults.items"
          :key="book.id"
        >
          <img
            :src="'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'"
          >
      
          <div>
            <h4>{{ book.volumeInfo.title }}</h4>
            <h2 v-if="book.volumeInfo.subtitle">
              {{ book.volumeInfo.subtitle }}
            </h2>
            <h3 v-if="book.volumeInfo.authors">
              by {{ bookAuthors(book) }}
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </section>
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

    bookAuthors(book) {
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
