import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
  },
  mutations: {
    setBooks(state, data) {
      state.books = data;
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
