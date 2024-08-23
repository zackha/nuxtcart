<script setup lang="ts">
const route = useRoute();
const product = ref(null);

onMounted(() => {
  getProduct(route.params.slug).then(data => (product.value = data.product));
});

const selectedSize = ref(null);

const selectSize = size => {
  selectedSize.value = size;
};
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
          <td><strong>Sizes:</strong></td>
          <td>
            <span v-for="size in product.variations.nodes" :key="size.databaseId">
              <button
                :style="[
                  'margin-right: 10px; border: 1px solid #000; padding: 2px 5px; cursor: pointer',
                  size.databaseId === selectedSize?.databaseId ? 'background-color: #000;color: #fff;' : '',
                ]"
                @click="selectSize(size)"
                v-for="attr in size.attributes.nodes"
                :key="attr.value">
                {{ attr.value.toUpperCase() }}
              </button>
            </span>
          </td>
        </tr>
        <tr>
          <td><strong>Description:</strong></td>
          <td v-html="product.description"></td>
        </tr>
      </tbody>
    </table>
    <AddToCartButton :size="selectedSize" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
