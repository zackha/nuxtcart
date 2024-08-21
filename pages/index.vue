<script setup lang="ts">
import { gql } from 'nuxt-graphql-request/utils';

const { $graphql } = useNuxtApp();

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

const { data: products } = await useAsyncData('getProducts', async () => {
  const data = await $graphql.default.request(query);
  return data.products.nodes;
});
</script>

<template>
  <h3>Products</h3>
  <li v-for="product in products" :key="product.id">
    <NuxtLink :to="{ name: 'product-slug', params: { slug: product.slug } }">{{ product.name }}</NuxtLink>
  </li>
</template>
