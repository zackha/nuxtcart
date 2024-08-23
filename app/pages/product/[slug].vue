<script setup lang="ts">
const route = useRoute();
const product = ref(null);

onMounted(() => {
  getProduct(route.params.slug).then(data => (product.value = data.product));
});
</script>

<template>
  <span v-if="product">
    <div>
      <p>
        <strong>ID:</strong>
        {{ product.databaseId }}
      </p>
      <p>
        <strong>Name:</strong>
        {{ product.name }}
      </p>
    </div>
  </span>
  <span v-else>Loading...</span>
</template>
