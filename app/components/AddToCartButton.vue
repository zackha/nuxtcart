<script setup lang="ts">
const { handleAddToCart } = useCart();

defineProps<{
  varId: number | null;
}>();
</script>

<template>
  <button @click="handleAddToCart(varId)">Add to Cart</button>
</template>
