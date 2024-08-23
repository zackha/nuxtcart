<script setup lang="ts">
const products = ref([]);

onMounted(() => {
  listProducts().then(data => (products.value = data.products.nodes));
});
</script>

<template>
  <p v-if="products.length" v-for="product in products" :key="product.databaseId">
    <NuxtLink :to="{ name: 'product-slug', params: { slug: product.slug } }">
      <strong>{{ product.databaseId }}</strong>
      - {{ product.name }}
    </NuxtLink>
  </p>
  <p v-else>loading...</p>
</template>
