import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      let saleProducts = state.products.map((product) => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    // added a timeout delay to simulate fetching data from a server
    // async functions should not go in mutations, they should go in actions
    // reducePrice: (state) => {
    //   setTimeout(() => {
    //     state.products.forEach((product) => {
    //       product.price -= 1;
    //     });
    //   }, 3000);
    // },
    reducePrice: (state, payload) => {
      state.products.forEach((product) => {
        product.price -= payload;
      });
    },
  },
  actions: {
    // async tasks go here
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload);
      }, 2000);
    },
  },
  modules: {},
});
