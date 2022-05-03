<template>
  <!-- do not have to bind data to props since state was moved to store -->
  <ProductListOne />
  <ProductListTwo />
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
    return {};
  },
};
</script>

<style></style>
