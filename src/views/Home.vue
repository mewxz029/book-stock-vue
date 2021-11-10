<template>
  <div id="home">
    <h1 v-for="(item, index) in books" :key="index">{{ item.title }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      books: [],
    };
  },
  components: {},
  async mounted() {
    const result = await axios.get(
      "https://newbookstockapi.herokuapp.com/book"
    );
    this.books = result.data.data;
    console.log(result.data.data);
  },
};
</script>
