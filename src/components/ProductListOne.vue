<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, i) in saleProducts" :key="i">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // computed re-renders based on state changes
  // in computed, create a method that returns the products array
  computed: {
    products() {
      return this.$store.state.products;
    },
    // making a new computed property works to maniupulate the state data, but it only works on the products in ProductListOne. This method would have to be copied to ProductListTwo for it to work there. Which is against the DRY principle. Instead of doing this, we can make a getter in the store.
    // saleProducts() {
    //   let saleProducts = this.$store.state.products.map((product) => {
    //     return {
    //       name: '**' + product.name + '**',
    //       price: product.price / 2,
    //     };
    //   });
    //   return saleProducts;
    // },
    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
