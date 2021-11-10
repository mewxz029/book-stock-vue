<template>
  <div id="home">
    <h1 v-for="(item, index) in $store.state.books" :key="index">{{ item }}</h1>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.$store.dispatch("getBooks");
  },
};
</script>
