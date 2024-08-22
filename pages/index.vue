<script setup lang="ts">
import { gql } from 'nuxt-graphql-request/utils';

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

const products = ref<Products[]>([]);

onMounted(async () => {
  const { products: fetchedProducts } = await useNuxtApp().$graphql.default.request(query);
  products.value = fetchedProducts.nodes;
});
</script>

<template>
  <h3>Products</h3>
  <li v-if="products.length" v-for="product in products" :key="product.id">
    <NuxtLink :to="{ name: 'product-slug', params: { slug: product.slug } }">{{ product.name }}</NuxtLink>
  </li>
  <div v-else>loading...</div>
</template>
