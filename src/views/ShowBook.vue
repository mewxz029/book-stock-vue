<template>
  <v-container>
    <v-row no-gutters align-center>
      <v-col sm="12" md="6" class="mx-auto">
        <v-card class="pa-2">
          <v-img
            v-if="payload.imgUrl"
            :src="payload.imgUrl"
            @error="() => (payload.imgUrl = null)"
          />
          <v-img v-else src="../assets/no-image.jpeg" />
          <v-card-actions>
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-btn outlined small color="primary">{{
                  payload.category
                }}</v-btn>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn text color="success" @click="$router.push(editPath)">
                  <v-icon left>mdi-notebook-edit-outline</v-icon>
                  Edit
                </v-btn>
                <v-btn text color="error" @click="deleteBook">
                  <v-icon left>mdi-book-remove-outline</v-icon>
                  Delete
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-title class="headline">
            <h3>{{ payload.title }}</h3>
          </v-card-title>
          <v-card-text class="grey--text">
            <p>{{ payload.desc }}</p>
            <p v-if="payload.stock > 19">
              จำนวนคงเหลือ :
              <v-chip color="green" dark>{{ payload.stock }}</v-chip>
            </p>
            <p v-else-if="payload.stock > 9">
              จำนวนคงเหลือ :
              <v-chip color="orange" dark>{{ payload.stock }}</v-chip>
            </p>
            <p v-else>
              จำนวนคงเหลือ :
              <v-chip color="red" dark>{{ payload.stock }}</v-chip>
            </p>
            <p>
              ราคา :
              <v-chip outlined color="success">$ {{ payload.price }}</v-chip>
            </p>
          </v-card-text>
          <v-btn
            color="error"
            x-large
            elevation-1
            block
            @click="$router.push('/')"
          >
            <v-icon left>mdi-arrow-left</v-icon>
            ย้อนกลับ
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      bookId: this.$route.params.id,
      payload: {},
      editPath: `/editbook/${this.$route.params.id}`,
    };
  },
  async mounted() {
    const result = await axios.get(
      `https://newbookstockapi.herokuapp.com/book/${this.bookId}`
    );
    this.payload = result.data.data;
  },
  methods: {
    deleteBook() {
      Swal.fire({
        title: "คุณต้องการจะลบเล่มนี้ใช่หรือไม่",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "ใช่",
        cancelButtonText: "ยกเลิก",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.delete(
              "https://newbookstockapi.herokuapp.com/book/" + this.bookId
            );
            await this.$router.push("/");
            Swal.fire("ลบหนังสือเรียบร้อย", "", "success");
          } catch (error) {
            console.log(error);
            Swal.fire("ลบหนังสือล้มเหลว", "", "error");
          }
        }
      });
    },
  },
};
</script>
