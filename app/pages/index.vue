<script setup lang="ts">
const products = ref([]);

onMounted(() => {
  listProducts().then(data => (products.value = data.products.nodes));
});
</script>

<template>
  <div>
    <table v-if="products.length" class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.databaseId">
          <td>
            <strong>{{ product.databaseId }}</strong>
          </td>
          <td>{{ product.name }}</td>
          <td>
            <NuxtLink :to="{ name: 'product-slug', params: { slug: product.slug } }">View Details</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>loading...</p>
  </div>
</template>
