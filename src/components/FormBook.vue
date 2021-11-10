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
              prepend-icon="mdi-notebook-outline"
            ></v-text-field>
            <v-text-field
              label="ประเภทหนังสือ"
              required
              outlined
              prepend-icon="mdi-bookmark-multiple-outline"
            ></v-text-field>
            <v-textarea
              label="รายละเอียด"
              outlined
              prepend-icon="mdi-comment-bookmark-outline"
            ></v-textarea>
            <v-text-field
              label="URL รูปภาพ"
              outlined
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
                  value="0"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="ราคา"
                  required
                  outlined
                  prepend-icon="mdi-currency-usd"
                  type="number"
                  value="0"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn elevation-1 color="success" block x-large class="mt-3">
              <v-icon left>mdi-book-plus-outline</v-icon>
              เพิ่มหนังสือใหม่
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
export default {
  name: "form-book",
};
</script>
