<template>
  <v-container>
    <v-row no-gutters align-center>
      <v-col class="pa-2" sm="6" md="3" v-for="item in books" :key="item._id">
        <router-link :to="'/book/' + item._id" class="text-decoration-none">
          <v-card class="pa-1" hover>
            <v-img
              v-if="item.imgUrl"
              :src="item.imgUrl"
              @error="() => (item.imgUrl = null)"
              max-height="300"
              width="100%"
            />
            <v-img
              v-else
              src="../assets/no-image.jpeg"
              contain
              height="300"
              width="100%"
            />
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
              <p v-if="item.stock > 19">
                จำนวนคงเหลือ :
                <v-chip color="green" dark>{{ item.stock }}</v-chip>
              </p>
              <p v-else-if="item.stock > 9">
                จำนวนคงเหลือ :
                <v-chip color="orange" dark>{{ item.stock }}</v-chip>
              </p>
              <p v-else>
                จำนวนคงเหลือ :
                <v-chip color="red" dark>{{ item.stock }}</v-chip>
              </p>
            </v-card-text>
          </v-card>
        </router-link>
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
