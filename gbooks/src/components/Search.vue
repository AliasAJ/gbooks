<template>
  <v-parallax
    src="https://besthqwallpapers.com/img/original/47929/4k-android-green-and-yellow-google-chrome-material-design.jpg"
  > 
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-3 font-weight-thin mb-3">
        G-Books
      </h1>
      <!-- <h4 class="subheading">Find your book today!</h4> -->
    </v-layout>
    <v-flex
      xs12
      sm6
      md6
    >
      <v-text-field
        v-model="task"
        color="white"
        label="What book are you looking for?"
      />
    </v-flex>
  </v-parallax>
</template>

<script>

export default {
  name: 'Search',
  props: {
  }
}
</script>