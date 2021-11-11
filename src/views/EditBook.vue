<template>
  <form-book actionBook="EDIT_BOOK" :bookId="bookId" />
</template>

<script>
import FormBook from "../components/FormBook.vue";

export default {
  name: "editbook",
  data() {
    return {
      bookId: this.$route.params.id,
    };
  },
  components: {
    FormBook,
  },
};
</script>
