<script setup lang="ts">
const { handleAddToCart } = useCart();

defineProps<{
  size: object | null;
}>();
</script>

<template>
  <button @click="handleAddToCart(size)">Add to Cart</button>
</template>
