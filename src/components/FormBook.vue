<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>เพิ่มหนังสือใหม่</v-card-title>
          <v-form ref="form" class="pa-5">
            <v-text-field
              label="ชื่อหนังสือ"
              required
              outlined
              v-model="payload.title"
              prepend-icon="mdi-notebook-outline"
            ></v-text-field>
            <v-text-field
              label="ประเภทหนังสือ"
              required
              outlined
              v-model="payload.category"
              prepend-icon="mdi-bookmark-multiple-outline"
            ></v-text-field>
            <v-textarea
              label="รายละเอียด"
              outlined
              v-model="payload.desc"
              prepend-icon="mdi-comment-bookmark-outline"
            ></v-textarea>
            <v-text-field
              label="URL รูปภาพ"
              outlined
              v-model="payload.imgUrl"
              prepend-icon="mdi-file-image-outline"
            ></v-text-field>
            <v-row>
              <v-col>
                <v-text-field
                  label="จำนวน"
                  required
                  outlined
                  prepend-icon="mdi-storefront-outline"
                  type="number"
                  v-model="payload.stock"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="ราคา"
                  required
                  outlined
                  prepend-icon="mdi-currency-usd"
                  type="number"
                  v-model="payload.price"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn
              elevation-1
              color="success"
              block
              x-large
              class="mt-3"
              v-if="actionBook === 'ADD_BOOK'"
              @click="createBook"
            >
              <v-icon left>mdi-book-plus-outline</v-icon>
              เพิ่มหนังสือใหม่
            </v-btn>
            <v-btn
              elevation-1
              color="success"
              block
              x-large
              class="mt-3"
              v-else-if="actionBook === 'EDIT_BOOK'"
            >
              <v-icon left>mdi-book-plus-outline</v-icon>
              แก้ไขหนังสือ
            </v-btn>
            <v-btn
              elevation-1
              color="error"
              block
              x-large
              class="mt-3"
              @click="$router.push('/')"
            >
              <v-icon left>mdi-arrow-left</v-icon>
              ย้อนกลับ
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "form-book",
  data() {
    return {
      payload: {
        title: "",
        category: "",
        desc: "",
        imgUrl: "",
        stock: 0,
        price: 0,
      },
      status: "",
    };
  },
  props: { actionBook: String },
  methods: {
    async createBook() {
      try {
        const result = await axios.post(
          "https://newbookstockapi.herokuapp.com/book",
          this.payload
        );
        await this.$router.push("/");
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "เพิ่มหนังสือสำเร็จ",
          showConfirmButton: true,
        });
        this.status = result.status;
      } catch (error) {
        this.status = error;
        console.log(error);
      }
      this.status = "";
    },
  },
};
</script>
