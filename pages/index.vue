<script setup lang="ts">
import { gql } from 'nuxt-graphql-request/utils';

const products = ref<Products[]>([]);

const fetchProducts = async () => {
  const query = gql`
    query getProducts {
      products(first: 3) {
        nodes {
          slug
          id
          name
        }
      }
    }
  `;

  const { products } = await useNuxtApp().$graphql.default.request(query);
  return products.nodes;
};

onMounted(async () => {
  products.value = await fetchProducts();
});
</script>

<template>
  <h3>All Products</h3>
  <p v-if="products.length" v-for="product in products" :key="product.id">
    <NuxtLink :to="{ name: 'product-slug', params: { slug: product.slug } }">{{ product.name }}</NuxtLink>
  </p>
  <p v-else>loading...</p>
</template>
