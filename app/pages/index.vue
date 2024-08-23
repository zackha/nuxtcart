<script setup lang="ts">
const productsData = ref([]);

onMounted(async () => {
  productsData.value = await listProducts();
});

const products = computed(() => productsData.value?.products?.nodes || []);
</script>

<template>
  <h3>All Products</h3>
  <p v-if="products.length" v-for="product in products" :key="product.databaseId">
    <NuxtLink :to="{ name: 'product-slug', params: { slug: product.slug } }">
      <strong>{{ product.databaseId }}</strong>
      - {{ product.name }}
    </NuxtLink>
  </p>
  <p v-else>loading...</p>
</template>
