<template>
  <!-- bind data to props -->
  <ProductListOne :products="products" />
  <ProductListTwo :products="products" />
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';
export default {
  components: {
    ProductListOne,
    ProductListTwo,
  },
  name: 'App',
  data() {
    return {
      products: [
        { name: 'Banana Skin', price: 20 },
        { name: 'Shiny Star', price: 40 },
        { name: 'Green Shells', price: 60 },
        { name: 'Red Shells', price: 80 },
      ],
    };
  },
};
</script>

<style></style>
