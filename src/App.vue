<template>
  <v-app>
    <headerbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import headerbar from "@/components/headerbar";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    headerbar,
  },
};
</script>

<style>
main {
  margin-top: 64px;
  background: #fbe9e7;
}
</style>
