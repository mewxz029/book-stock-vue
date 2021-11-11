<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title v-if="actionBook === 'ADD_BOOK'"
            >เพิ่มหนังสือใหม่</v-card-title
          >
          <v-card-title v-else-if="actionBook === 'EDIT_BOOK'"
            >แก้ไขหนังสือ</v-card-title
          >
          <v-form ref="form" class="pa-5">
            <v-text-field
              label="ชื่อหนังสือ"
              required
              outlined
              v-model="payload.title"
              prepend-icon="mdi-notebook-outline"
              :rules="textRules"
            ></v-text-field>
            <v-text-field
              label="ประเภทหนังสือ"
              required
              outlined
              v-model="payload.category"
              prepend-icon="mdi-bookmark-multiple-outline"
              :rules="textRules"
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
                  v-model.number="payload.stock"
                  :rules="stockRules"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="ราคา"
                  required
                  outlined
                  prepend-icon="mdi-currency-usd"
                  type="number"
                  v-model.number="payload.price"
                  :rules="priceRules"
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
              @click="updateBook"
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
      textRules: [(value) => !!value || "กรุณากรอกข้อมูลให้ครบถ้วน"],
      stockRules: [
        (value) => Number(value) >= 0 || "กรุณากรอกข้อมูลให้ครบถ้วน",
        (value) =>
          Number.isInteger(Number(value)) ||
          "จำนวนสต็อกเป็นเลขจำนวนเต็มเท่านั้น",
      ],
      priceRules: [(value) => Number(value) > 0 || "กรุณากรอกข้อมูลให้ครบถ้วน"],
      status: "",
    };
  },
  props: { actionBook: String, bookId: String },
  methods: {
    async createBook() {
      if (this.$refs.form.validate()) {
        try {
          const result = await axios.post(
            "https://newbookstockapi.herokuapp.com/book",
            this.payload
          );
          await this.$router.push("/");
          this.status = "เพิ่มหนังสือสำเร็จ";
          console.log(result);
        } catch (error) {
          this.status = "เพิ่มหนังสือไม่สำเร็จ";
          console.log(error);
        }
        await Swal.fire({
          position: "center",
          icon: "success",
          title: this.status,
          showConfirmButton: true,
        });
        this.status = "";
      }
    },
    updateBook() {
      if (this.$refs.form.validate()) {
        Swal.fire({
          title: "คุณต้องการจะแก้ไขหนังสือเล่มนี้ใช่หรือไม่",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ใช่",
          cancelButtonText: "ยกเลิก",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios.put(
                "https://newbookstockapi.herokuapp.com/book/" +
                  this.payload._id,
                {
                  title: this.payload.title,
                  category: this.payload.category,
                  desc: this.payload.desc,
                  imgUrl: this.payload.imgUrl,
                  stock: this.payload.stock,
                  price: this.payload.price,
                }
              );
              await this.$router.push(`/book/${this.payload._id}`);
              Swal.fire("แก้ไขหนังสือเรียบร้อย", "", "success");
            } catch (error) {
              console.log(error);
              Swal.fire("แก้ไขหนังสือล้มเหลว", "", "error");
            }
          }
        });
      }
    },
  },
  async mounted() {
    if (this.$props.actionBook === "EDIT_BOOK") {
      const result = await axios.get(
        `https://newbookstockapi.herokuapp.com/book/${this.$props.bookId}`
      );
      this.payload = result.data.data;
    }
  },
};
</script>
