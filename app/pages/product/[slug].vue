<script setup lang="ts">
const route = useRoute();
const product = ref(null);

onMounted(() => {
  getProduct(route.params.slug).then(data => (product.value = data.product));
});
</script>

<template>
  <div v-if="product">
    <table class="table">
      <tbody>
        <tr>
          <td><strong>ID:</strong></td>
          <td>{{ product.databaseId }}</td>
        </tr>
        <tr>
          <td><strong>Name:</strong></td>
          <td>{{ product.name }}</td>
        </tr>
        <tr>
          <td><strong>Description:</strong></td>
          <td v-html="product.description"></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
