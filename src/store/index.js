import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    message: "",
  },
  mutations: {
    setBooks(state, data) {
      state.books = data;
    },
    setMessage(state, data) {
      state.message = data;
    },
  },
  actions: {
    async getBooks(context) {
      const result = await axios.get(
        "https://newbookstockapi.herokuapp.com/book"
      );
      const data = result.data.data;
      context.commit("setBooks", data);
    },
    async createBook(context, payload) {
      await axios
        .post("https://newbookstockapi.herokuapp.com/book", payload)
        .then((res) => {
          context.commit("setMessage", "เพิ่มหนังสือสำเร็จ");
          console.log("เพิ่มหนังสือสำเร็จ " + res.status);
        })
        .catch((error) => {
          context.commit("setMessage", "เพิ่มหนังสือไม่สำเร็จ");
          console.log("เพิ่มหนังสือไม่สำเร็จ " + error);
        });
    },
    async updateBook(context, id, payload) {
      await axios.put(
        `https://newbookstockapi.herokuapp.com/book/${id}`,
        payload
      );
    },
    async deleteBook(context, id) {
      await axios.delete(`https://newbookstockapi.herokuapp.com/book/${id}`);
    },
  },
  modules: {},
});
