<template>
  <v-toolbar elevation-4>
    <router-link to="/" exact class="text-decoration-none">
      <v-toolbar-title class="headline">จัดการสต็อก</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn
      elevation-1
      large
      dark
      class="deep-orange darken-2"
      @click="$router.push('/addbook')"
    >
      <v-icon left>mdi-book-plus-outline</v-icon>
      เพิ่ม
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "headerbar",
};
</script>

<style scoped>
.v-toolbar {
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>
