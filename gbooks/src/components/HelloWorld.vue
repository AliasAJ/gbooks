<template>
  <div class="hello">
        <v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
              <h1>All the right books, in the right place.</h1>
    <p>
      G-Books will help you find the perfect book for any mood. Here are some reasons why you should use our service:
    </p>
        </v-card-text>
        <v-container fluid grid-list-md>
            <v-layout row wrap >
              <v-flex d-flex xs12 sm6 md4>
        <v-card color="green" dark flat>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>Every place has a culture, either by accident or design. We intentionally create an environment you can thrive in.</v-card-text>
        </v-card>
      </v-flex>
            <v-flex d-flex xs12 sm6 md4>
        <v-card color="green" dark flat>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>Our respectful + rewarding culture helps us to attract + retain the very best people.</v-card-text>
        </v-card>
      </v-flex>
            <v-flex d-flex xs12 sm6 md4>
        <v-card color="green" dark flat>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>We marry them together. Our members + guests are grateful we do.</v-card-text>
        </v-card>
      </v-flex>
            </v-layout>
        </v-container>
                          <!-- <v-parallax
    height="400"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  > 
      <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-3 font-weight-thin mb-3">G-Books</h1>
      <h4 class="subheading">Find your book today!</h4>
      </v-layout>
          <v-flex xs12 sm6 md6>
          <v-text-field
      v-model="task"
      label="What book are you looking for?"
      @keydown.enter="create"
    >
    </v-text-field>
    </v-flex>
    </v-parallax> -->
      </v-responsive>
    </v-card>
  
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
