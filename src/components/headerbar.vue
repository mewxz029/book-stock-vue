<template>
  <div>
    <v-toolbar elevation-4 light>
      <router-link to="/" exact="active" class="text-decoration-none">
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
  </div>
</template>

<script>
export default {
  name: "headerbar",
};
</script>
