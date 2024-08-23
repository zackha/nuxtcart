<script setup lang="ts">
const route = useRoute();
const product = ref(null);

onMounted(() => {
  getProduct(route.params.slug).then(data => product.value = data.product);
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
      <!--<p>
        <strong>Size:</strong>
        <span v-for="size in product.allPaSize.nodes" :key="size.id">
          <button
            :class="{ selected: size.name === selectedSize }"
            @click="selectSize(size.name)"
            :style="['margin: 0px 5px; border: 1px solid #000; padding: 2px 5px; cursor: pointer', size.name === selectedSize ? 'background-color: #000;color: #fff;' : '']">
            {{ size.name }} - ({{ size.databaseId }})
          </button>
        </span>
      </p>-->
      <p>
        <strong>Description:</strong>
        <p v-html="product.description"/>
      </p>
      <!--<button @click="addToCart" style="padding: 0.4rem 4rem">Sepete Ekle</button>-->
    </div>
  </span>
  <span v-else>Loading...</span>
</template>
