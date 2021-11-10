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
