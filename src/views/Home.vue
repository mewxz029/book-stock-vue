<template>
  <v-container>
    <v-row no-gutters align-center>
      <v-col class="pa-2" sm="6" md="3" v-for="item in books" :key="item._id">
        <v-card class="pa-1" hover>
          <v-img :src="item.imgUrl" max-height="300" width="100%" />
          <v-btn color="indigo" outlined small class="ml-4 mt-3">
            {{ item.category }}
          </v-btn>
          <v-card-title class="headline">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <h4
                  class="ellipsis"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ item.title }}
                </h4>
              </template>
              <span>{{ item.title }}</span>
            </v-tooltip>
            <v-spacer />
            <v-chip outlined color="success">$ {{ item.price }}</v-chip>
          </v-card-title>
          <v-card-text class="py-0">
            <div class="des d-flex">
              <p class="text-truncate">{{ item.desc }}</p>
            </div>
            <p>
              จำนวนคงเหลือ : <v-chip>{{ item.stock }}</v-chip>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.$store.dispatch("getBooks");
  },
  computed: {
    ...mapState({
      books: (state) => state.books,
    }),
  },
};
</script>

<style>
.ellipsis {
  width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.des {
  height: 100px;
}
</style>
